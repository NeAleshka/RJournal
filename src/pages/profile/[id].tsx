import MainLayout from '@/layouts/MainLayout';
import Image from 'next/image';
import Button from '@/componets/Button';
import {ChatBubbleLeftEllipsisIcon, Cog8ToothIcon} from '@heroicons/react/24/outline';
import Post from '@/componets/Post';
import {posts} from '@/pages';

export default function Profile() {
  return (
    <MainLayout hideComments={true} contentFullWidth={true}>
      <div>
        <div className={'mb-7 rounded-[10px] bg-white p-[20px]'}>
          <div className={'mb-[30px] flex flex-nowrap justify-between'}>
            {/*left*/}
            <div className={'text-[16px]'}>
              <Image
                src={
                  'https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/'
                }
                width={120}
                height={120}
                className={'mb-4 rounded-[10px]'}
                alt={'avatar'}
              />
              <h1 className={'text-[34px] font-bold'}>Amon Bower</h1>
              <div className={'mb-3'}>
                <span className={'mr-4 font-medium text-green-600'}>+208</span>
                <span>2 подписчика</span>
              </div>
              <div>На проекте с 15 сен 2016</div>
            </div>
            {/*right*/}
            <div className={'flex items-start'}>
              <Button className={'mr-2'}>
                <Cog8ToothIcon className={'icon'} />
              </Button>
              <Button className={'flex bg-blue-300 text-white'}>
                <ChatBubbleLeftEllipsisIcon className={'icon mr-1'} />
                <span>Написать</span>
              </Button>
            </div>
          </div>
          <div className={'mb-3 flex items-start'}>
            <div className={'sort_filter active_filter'}>СТАТЬИ</div>
            <div className={'sort_filter'}>КОММЕНТАРИИ</div>
            <div className={'sort_filter'}>ЗАКЛАДКИ</div>
          </div>
        </div>
        <div className={'flex justify-between'}>
          <div className={'max-w-[680px]'}>
            <Post
              title={posts[0].title}
              description={posts[0].description}
              imgUrl={posts[0].imgUrl}
            />
          </div>
          <div className={'ml-5 h-fit w-[350px] rounded-10px bg-white p-[15px]'}>
            <div className={'mb-4 text-[14px] font-medium'}>Подписчики</div>
            <div className={'flex space-x-3'}>
              <div
                className={
                  'flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-red-500 text-[25px] text-white'
                }>
                Я
              </div>
              <div
                className={
                  'flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-red-500 text-[25px] text-white'
                }>
                Я
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

/*
 */
