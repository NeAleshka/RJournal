import React, {useState} from 'react';
import {Bars3Icon, MagnifyingGlassIcon, UserCircleIcon} from '@heroicons/react/24/solid';
import {
  ArrowSmallLeftIcon,
  BellIcon,
  ChatBubbleLeftEllipsisIcon,
  ChevronDownIcon,
  PlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {appleLogo, faceBook, googleLogo, logo, mail, twitter, vk} from '@/assets/images';
import {useDeviceSize} from '@/hooks';
import Button from '@/componets/Button';
import Link from 'next/link';
import CreatePost from '@/componets/CreatePost';
import {Backdrop, Box, Modal, Zoom} from '@mui/material';
import {IEntrance} from '@/interfaces';
import {FormProvider, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {FormField} from '@/componets/FormField';

const Header = () => {
  return (
    <div className={'header'}>
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Header;

const LeftSide = () => {
  const screenWidth = useDeviceSize();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={'flex items-center'}>
      <div className={'circle_hover_bg'}>
        <Bars3Icon className={'icon'} />
      </div>
      <Link href={'/'}>
        <Image src={logo} alt={'logo'} className={'mr-4 h-[35px] w-[34px] cursor-pointer'} />
      </Link>
      <div className={'header_search'}>
        <MagnifyingGlassIcon className={'mr-2 w-[20px] text-gray-500'} />
        <input placeholder={'Поиск'} className={'w-full bg-inherit outline-none'} />
      </div>
      <Button
        className={'ml-3 rounded-xl border bg-white px-4 py-2 shadow hover:shadow-lg'}
        onClick={handleOpen}>
        <span className={'text-[16px] font-medium text-black'}>
          {screenWidth < 730 ? <PlusIcon className={'h-[25px] w-[25px]'} /> : 'Новая запись'}
        </span>
      </Button>

      <CreatePost open={open} handleClose={handleClose} />
    </div>
  );
};

const RightSide = () => {
  const width = useDeviceSize();
  const [open, setOpen] = React.useState(false);

  return (
    <div className={'flex'}>
      {width > 600 && (
        <>
          <div className={'circle_hover_bg'} onClick={() => setOpen(true)}>
            <ChatBubbleLeftEllipsisIcon className={'icon'} />
          </div>
          <div className={'circle_hover_bg'}>
            <BellIcon className={'icon'} />
          </div>
        </>
      )}
      <Link href={`/profile/1`}>
        <UserCircleIcon className={'w-[40px] cursor-pointer'} />
      </Link>
      <ChevronDownIcon className={'w-[15px]'} />
      <EntranceModal open={open} setOpen={setOpen} />
    </div>
  );
};

const EntranceModal = ({open, setOpen}: IEntrance) => {
  const [formAuth, setFormAuth] = useState<'main' | 'email' | 'register'>('main');

  return (
    <Modal
      className={'backdrop-blur-sm'}
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      slots={{backdrop: Backdrop}}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}>
      <Zoom in={open}>
        <Box
          className={
            'absolute top-[30%] left-[40%] flex w-[400px] flex-col space-y-6 rounded-[5px] border bg-white p-4 backdrop-blur-sm'
          }>
          {formAuth === 'main' ? (
            <MainEntranceModal setOpen={setOpen} setFormAuth={setFormAuth} />
          ) : (
            <EmailEntrance setOpen={setOpen} setFormAuth={setFormAuth} />
          )}
        </Box>
      </Zoom>
    </Modal>
  );
};

const EmailEntrance = ({setFormAuth, setOpen}: any) => {
  const loginSchema = yup.object().shape({
    email: yup.string().email('Неверный формат').required('Обязательное поле'),
    password: yup.string().min(4, 'Не менее 4 символов').required('Обязательное поле'),
  });

  const [isRegister, setIsRegister] = useState(false);
  const form = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });
  const onSubmit = () => {};
  return !isRegister ? (
    <div className={'h-fit w-[366px]'}>
      <div className={'mb-8 flex items-center justify-between'}>
        <div className={'flex cursor-pointer items-center'} onClick={() => setFormAuth('main')}>
          <ArrowSmallLeftIcon className={'mr-2 h-[15px] w-[15px]'} />
          <div className={'text-[16px] font-medium'}>К авторизации</div>
        </div>
        <XMarkIcon className={'h-[20px] w-[20px] cursor-pointer'} onClick={() => setOpen(false)} />
      </div>
      <div className={'text-[25px] font-medium'}>{'Войти через почту'}</div>
      <div className={'mb-5 text-[14px]'}>
        или
        <span
          onClick={() => setIsRegister(!isRegister)}
          className={'cursor-pointer text-blue-400 hover:text-gray-500'}>
          {' зарегистрироваться'}
        </span>
      </div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name={'email'} label={'Почта'} />
          <FormField name={'password'} label={'Пароль'} />
          <div className={'flex w-full items-center justify-between '}>
            <Button type={'submit'} disabled={!form.formState.isValid}>
              Войти
            </Button>
            <div className={'cursor-pointer border-b border-dashed text-[12px] text-gray-400'}>
              Я забыл пароль
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  ) : (
    <RegisterModal
      setFormAuth={setFormAuth}
      setOpen={setOpen}
      setIsRegister={setIsRegister}
      isRegister={isRegister}
    />
  );
};

const RegisterModal = ({setFormAuth, setOpen, setIsRegister, isRegister}: any) => {
  const registerSchema = yup.object().shape({
    email: yup.string().email('Неверный формат').required('Обязательное поле'),
    password: yup.string().min(4, 'Не менее 4 символов').required('Обязательное поле'),
    fullName: yup.string().required('Обязательное поле'),
  });

  const form = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'onChange',
  });
  const onSubmit = () => {};
  return (
    <div className={'h-fit w-[366px]'}>
      <div className={'mb-8 flex items-center justify-between'}>
        <div className={'flex cursor-pointer items-center'} onClick={() => setFormAuth('main')}>
          <ArrowSmallLeftIcon className={'mr-2 h-[15px] w-[15px]'} />
          <div className={'text-[16px] font-medium'}>К авторизации</div>
        </div>
        <XMarkIcon className={'h-[20px] w-[20px] cursor-pointer'} onClick={() => setOpen(false)} />
      </div>
      <div className={'text-[25px] font-medium'}>{'Регистрация через почту'}</div>
      <div className={'mb-5 text-[14px]'}>
        или
        <span
          onClick={() => setIsRegister(!isRegister)}
          className={'cursor-pointer text-blue-400 hover:text-gray-500'}>
          {' войти в аккаунт'}
        </span>
      </div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name={'fullName'} label={'Имя и фамилия'} />
          <FormField name={'email'} label={'Почта'} />
          <FormField name={'password'} label={'Пароль'} />
          <div className={'flex w-full items-center justify-between '}>
            <Button disabled={!form.formState.isValid} type={'submit'}>
              Зарегистрироваться
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

const MainEntranceModal = ({setFormAuth, setOpen}: any) => {
  return (
    <>
      <div className={'absolute right-2 flex'}>
        <XMarkIcon className={'h-[20px] w-[20px] cursor-pointer'} onClick={() => setOpen(false)} />
      </div>
      <div className={'!mt-0 text-[30px] font-bold'}>Вход на RJ</div>
      <Button className={'relative flex items-center bg-white text-black'}>
        <Image src={vk} alt={'vk'} className={'absolute h-[20px] w-[20px]'} />
        <div className={'flex-grow'}>Вконтакте</div>
      </Button>
      <Button className={'relative flex items-center bg-white text-black'}>
        <Image src={googleLogo} alt={'google'} className={'absolute h-[20px] w-[20px]'} />
        <div className={'flex-grow'}>Google</div>
      </Button>
      <Button
        className={'relative flex items-center bg-white text-black'}
        onClick={() => setFormAuth('email')}>
        <Image src={mail} alt={'mail'} className={'absolute h-[20px] w-[20px]'} />
        <div className={'flex-grow'}>Через почту</div>
      </Button>
      <div className={'flex w-full justify-between space-x-2'}>
        <Button className={'bg-white px-7 py-2'}>
          <Image src={faceBook} alt={'faceBook'} className={'h-[20px] w-[20px] '} />
        </Button>
        <Button className={'bg-white px-7 py-2'}>
          <Image src={twitter} alt={'faceBook'} className={'h-[20px] w-[20px]'} />
        </Button>
        <Button className={'bg-white px-7 py-2'}>
          <Image src={appleLogo} alt={'faceBook'} className={'h-[20px] w-[20px]'} />
        </Button>
      </div>
    </>
  );
};
