import MainLayout from '@/layouts/MainLayout';
import Post from '@/componets/Post';
import {IPostProps} from '@/interfaces';
import Link from 'next/link';

export default function Home() {
  const posts: IPostProps[] = [
    {
      title: 'Кот прилег отдохнуть в английском парке миниатур - и стал героем шуток и фотожаб',
      description:
        'Пока они не могли соотнести размеры животного и окружения,другие начали создавать апокалптические сюжеты с котом' +
        ' в главной роли',
      imgUrl: 'https://web24.com.ua/wp-content/uploads/2021/10/tema-06-001jpg.jpg',
      id: '1',
    },
    {
      title: '"Прямо сейчас идет бой": о чем говорил Путин в Лужниках ― видео"',
      description:
        'Накануне Дня защитника Отечества президент РФ присутствовал в Лужниках на праздничном митинге-концерте "Слава защитникам Отечества". О чем говорил российский лидер, смотрите на видео.',
      imgUrl: 'https://web24.com.ua/wp-content/uploads/2021/10/tema-06-001jpg.jpg',
      id: '2',
    },
    {
      title: 'Военные РФ поразили цех по выпуску минометов для ВСУ и пункт с наемниками',
      description:
        'На Красно-Лиманском направлении идет наступление группировки войск "Центр", на Донецком наступает группировка "Южная".',
      imgUrl: 'https://web24.com.ua/wp-content/uploads/2021/10/tema-06-001jpg.jpg',
      id: '3',
    },
  ];

  return (
    <MainLayout>
      {posts.map(({imgUrl, description, title, id}, index) => (
        <Link href={`news/${id}`}>
          <Post
            key={imgUrl + index}
            title={title}
            description={description}
            imgUrl={imgUrl}
            id={id}
          />
        </Link>
      ))}
    </MainLayout>
  );
}
