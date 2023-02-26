import React from 'react';
import {Backdrop, Box, Input, Modal, Zoom} from '@mui/material';
import dynamic from 'next/dynamic';
import Button from '@/componets/Button';

interface IModalProps {
  open: boolean;
  handleClose: () => void;
}

const Editor = dynamic(() => import('./Editor').then(module => module), {ssr: false});

export default function CreatePost({open, handleClose}: IModalProps) {
  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{backdrop: Backdrop}}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      className={'flex justify-center !z-10 backdrop-blur-sm'}>
      <Zoom in={open} style={{transitionDuration: '400ms'}}>
        <Box className={'modal'}>
          <Input
            placeholder={'Заголовок'}
            disableUnderline
            className={'w-full !text-[32px] !font-bold'}
          />
          <Editor />
          <div className={'mt-[90px] flex w-full justify-center'} onClick={handleClose}>
            <Button className={'bg-green-500 font-medium text-white'}>Опубликовать</Button>
          </div>
        </Box>
      </Zoom>
    </Modal>
  );
}
