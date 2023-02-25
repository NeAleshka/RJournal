import React from 'react';
import {PostActions} from '@/componets/Post';
import {UserCircleIcon} from '@heroicons/react/24/solid';
import {ChatBubbleLeftEllipsisIcon, UserPlusIcon} from '@heroicons/react/24/outline';
import Button from '@/componets/Button';

const FullPost = () => {
  return (
    <div className={'bg-white py-[30px] pb-16'}>
      <div className={'mx-auto flex w-[680px] flex-col space-y-5 text-[18px]'}>
        <div className={'text-[36px] font-medium leading-[45px]'}>
          Wizz Air, летящий из Варшавы в Прагу, подал сигнал бедствия. Возможно, в Полете произошла
          резгермитизация
        </div>
        <div>
          Wizz Air, летящий из Варшавы в Прагу, подал сигнал бедствия. Об этом сообщают польские
          новости с ссылкой на информационный источник. По данным источника, самолет резко снизился
          на границе
        </div>
        <div>
          Wizz Air, летящий из Варшавы в Прагу, подал сигнал бедствия. Об этом сообщают польские
          новости с ссылкой на информационный источник. По данным источника, самолет резко снизился
          на границе
        </div>
        <div>
          Wizz Air, летящий из Варшавы в Прагу, подал сигнал бедствия. Об этом сообщают польские
          новости с ссылкой на информационный источник. По данным источника, самолет резко снизился
          на границе
        </div>
        <div className={'ml-[-10px] w-[250px]'}>
          <PostActions />
        </div>
        <div className={'flex w-full justify-between'}>
          <div className={'flex items-center'}>
            <UserCircleIcon className={'mr-2 w-[40px] cursor-pointer'} />
            <div className={'text-[18px] font-medium'}>
              Donnie Darko <span className={'text-green-600'}>+1685</span>
            </div>
          </div>
          <div className={'flex'}>
            <Button
              className={
                'cursor-pointer rounded-[10px] border px-[25px] py-[6px] shadow hover:shadow-md'
              }>
              <ChatBubbleLeftEllipsisIcon className={'icon'} />
            </Button>
            <Button
              className={
                'ml-2 flex cursor-pointer items-end rounded-[10px] border px-[25px] py-[6px] text-[16px] font-medium' +
                ' shadow' +
                ' hover:shadow-md'
              }>
              <UserPlusIcon className={'icon'} />
              <div className={'ml-2'}>Подписаться</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPost;
