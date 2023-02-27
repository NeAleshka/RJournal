import MainLayout from '@/layouts/MainLayout';
import {useState} from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import FollowButton from '@/componets/FollowButton';

export default function Rating() {
  return (
    <MainLayout>
      <RatingTitle />
      <UsersRating />
    </MainLayout>
  );
}

const RatingTitle = () => {
  return (
    <div className={'mb-[20px] rounded-[10px] bg-white px-[20px] pt-[20px] pb-[5px]'}>
      <div className={'mb-[6px] text-[30px] font-bold'}>Рейтинг сообществ и блогов</div>
      <div className={'text-[15px]'}>
        Десять лучших авторов и комментаторов, а также администраторы первых десяти сообществ из
        рейтинга по итогам месяца бесплатно получают Plus-аккаунт на месяц.
      </div>
      <RatingSort />
    </div>
  );
};

const RatingSort = () => {
  const [sort, setSort] = useState<'month' | 'threeMonth' | 'all'>('month');

  return (
    <div className={'mb-3 flex items-start'}>
      <div
        className={`sort_filter ${sort === 'month' && 'active_filter !text-blue-500'}`}
        onClick={() => setSort('month')}>
        ФЕВРАЛЬ
      </div>
      <div
        className={`sort_filter ${sort === 'threeMonth' && 'active_filter !text-blue-500'}`}
        onClick={() => setSort('threeMonth')}>
        ЗА 3 МЕСЯЦА
      </div>
      <div
        className={`sort_filter ${sort === 'all' && 'active_filter !text-blue-500'}`}
        onClick={() => setSort('all')}>
        ЗА ВСЁ ВРЕМЯ
      </div>
    </div>
  );
};

const UsersRating = () => {
  return (
    <div className={'mb-[10px] bg-white pt-[20px]'}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Имя пользователя</TableCell>
            <TableCell align='right'>Рейтинг</TableCell>
            <TableCell align='right' />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component='th' scope='row'>
              <span className='mr-15'></span>Вася Пупкин
            </TableCell>
            <TableCell align='right'>540</TableCell>
            <TableCell align='right'>
              <FollowButton />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
