import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import Header from '@/componets/Header';
import {Provider} from "react-redux";
import {wrapper} from "@/redux/store";
import {setUserData} from "@/redux/slices/user";
import {Api} from "@/api";

function App({Component, ...rest}: AppProps) {
    const {store, props} = wrapper.useWrappedStore(rest)
    return (
        <>
            <Head>
                <title>RJOURNAL</title>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
            </Head>
            <Provider store={store}>
                <Header/>
                <Component {...props.pageProps} />
            </Provider>
        </>
    );
}

export default App


App.getInitialProps = wrapper.getInitialAppProps((store) => async ({ ctx, Component}) => {
        try {
                const userData = await Api(ctx).user.me()
                store.dispatch(setUserData(userData))
        } catch (err) {
            if(ctx.asPath!=='/'){
                console.log('Привет')
                ctx.res?.writeHead(302,'authentication error',{
                    Location:'/'
                })
                ctx.res?.end()
            }
            store.dispatch(setUserData(null))
        }
        return {
            pageProps: {
                ...(Component.getInitialProps ? await Component.getInitialProps({...ctx, store}):{}),
                pathname: ctx.pathname,
            }
        }
    }
);