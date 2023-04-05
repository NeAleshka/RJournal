import React, {useState} from 'react';
import {Backdrop, Box, Input, Modal, Zoom} from '@mui/material';
import dynamic from 'next/dynamic';
import Button from '@/componets/Button';
import {OutputBlockData} from "@editorjs/editorjs";

interface IModalProps {
  open: boolean;
  handleClose: () => void;
}

const Editor = dynamic(() => import('./Editor').then(module => module), {ssr: false});

export default function CreatePost({open, handleClose}: IModalProps) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState<OutputBlockData[]>([]);
    
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
      className={'!z-10 flex justify-center overflow-y-scroll md:overflow-y-auto'}>
      <Zoom in={open} style={{transitionDuration: '400ms'}}>
        <Box className={'modal'}>
          <Input
            placeholder={'Заголовок'}
            disableUnderline
            className={'w-full !text-[32px] !font-bold'}
          />
          <Editor onChange={blocksArray=>setBody(blocksArray)}/>
          <div className={'mt-[90px] flex w-full justify-center'} onClick={handleClose}>
            <Button className={'bg-green-500 font-medium text-white'}>Опубликовать</Button>
          </div>
        </Box>
      </Zoom>
    </Modal>
  );
}
