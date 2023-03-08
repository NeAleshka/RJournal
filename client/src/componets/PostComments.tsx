import React, {useState} from 'react';
import PostComment from '@/componets/PostComment';
import {IPostComment, ISortComments} from '@/interfaces';
import CreateComment from '@/componets/CreateComment';

const PostComments = () => {
  const [sortComments, setSortComments] = useState<'popular' | 'date'>('popular');
  let postComments: IPostComment[] = [
    {
      comment: 'Много раз летал на Wizz Air, и все было хорошо',
      userName: 'Алексей',
      avatar:
        'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png',
      createAt: '5 часов назад',
      id: '1',
      postId:'1'
    },
    {
      comment: 'Каждое утро я начинаю с чашки кофео',
      userName: 'Виталий',
      avatar:
        'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
      createAt: '5 часов назад',
      id: '2',
      postId:'2'
    },
    {
      comment: 'Много раз летал на Wizz Air, и все было хорошо',
      userName: 'Женя',
      avatar:
        'https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png',
      createAt: '5 часов назад',
      id: '3',
      postId:'3',
    },
  ];

  sortComments === 'date' && (postComments = postComments.sort((a, b) => +b.id - +a.id));
  return (
    <div>
      <div className={'mt-[50px] rounded-[10px] bg-white py-[20px] pb-16'}>
        <div className={'mx-auto w-full px-3 lg:max-w-[640px] lg:px-0'}>
          <div className={'mb-10 mt-5 text-[20px] font-medium'}>42 комментария</div>
          <SortComments setSortComments={setSortComments} sortComments={sortComments} />
          <CreateComment />
          {postComments.map(({comment, userName, createAt, avatar, id}) => (
            <PostComment
              key={id}
              comment={comment}
              id={id}
              avatar={avatar}
              createAt={createAt}
              userName={userName}
              postId={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostComments;

const SortComments = ({sortComments, setSortComments}: ISortComments) => {
  return (
    <div className={'mb-5 flex w-full border-b text-gray-400'}>
      <div
        className={`cursor-pointer py-[6px] px-[26px] ${
          sortComments === 'popular' && 'border-b-4 border-b-blue-400 text-blue-400'
        }`}
        onClick={() => setSortComments('popular')}>
        ПОПУЛЯРНЫЕ
      </div>
      <div
        className={`cursor-pointer py-[6px] px-[26px] ${
          sortComments === 'date' && 'border-b-4 border-b-blue-400 text-blue-400'
        }`}
        onClick={() => setSortComments('date')}>
        ПО ПОРЯДКУ
      </div>
    </div>
  );
};
