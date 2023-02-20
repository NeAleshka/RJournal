import Head from 'next/head';
import Header from '../componets/Header';
import MainLayout from '@/layouts/MainLayout';
import Post, {IPostProps} from '@/componets/Post';

export default function Home() {
  const posts: IPostProps[] = [
    {
      title: 'Кот прилег отдохнуть в английском парке миниатур - и стал героем шуток и фотожаб',
      description:
        'Пока они не могли соотнести размеры животного и окружения,другие начали создавать апокалптические сюжеты с котом' +
        ' в главной роли',
      imgUrl: 'https://web24.com.ua/wp-content/uploads/2021/10/tema-06-001jpg.jpg',
    },
    {
      title: 'Кот прилег отдохнуть в английском парке миниатур - и стал героем шуток и фотожаб',
      description:
        'Пока они не могли соотнести размеры животного и окружения,другие начали создавать апокалптические сюжеты с котом' +
        ' в главной роли',
      imgUrl: 'https://web24.com.ua/wp-content/uploads/2021/10/tema-06-001jpg.jpg',
    },
    {
      title: 'Кот прилег отдохнуть в английском парке миниатур - и стал героем шуток и фотожаб',
      description:
        'Пока они не могли соотнести размеры животного и окружения,другие начали создавать апокалптические сюжеты с котом' +
        ' в главной роли',
      imgUrl: 'https://web24.com.ua/wp-content/uploads/2021/10/tema-06-001jpg.jpg',
    },
  ];

  return (
    <MainLayout>
      {posts.map(({imgUrl, description, title}, index) => (
        <Post key={imgUrl + index} title={title} description={description} imgUrl={imgUrl} />
      ))}
    </MainLayout>
  );
}
