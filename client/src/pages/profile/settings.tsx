import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import {TextField} from '@mui/material';
import Button from '@/componets/Button';

const Settings = () => {
  return (
    <MainLayout hideComments={true}>
      <div className={'rounded-10px bg-white p-[20px]'}>
        <div className={'mb-[30px] border-b pb-[20px] text-[20px] font-medium'}>
          Основные настройки
        </div>
        <form className={'mb-[20px] border-b pb-[10px]'}>
          <TextField className={'!mb-[20px] w-full'} label={'Никнейм'} required size={'small'} />
          <TextField
            className={'!mb-[20px] w-full'}
            label={'Эл.почта'}
            type={'email'}
            required
            size={'small'}
          />
          <TextField
            className={'!mb-[20px] w-full'}
            type={'password'}
            label={'Пароль'}
            required
            size={'small'}
          />
        </form>
        <Button className={'bg-blue-400 text-white'}>Сохранить изменения</Button>
      </div>
    </MainLayout>
  );
};

export default Settings;
