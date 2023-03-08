import React, {useRef, useState} from 'react';
import {ClickAwayListener, Input} from '@mui/material';
import Button from '@/componets/Button';

const CreateComment = () => {
  const inputRef = useRef(null);
  const [inputClick, setInputClick] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setInputClick(false)}>
      <div
        onClick={() => setInputClick(true)}
        className={`relative mb-7 flex items-center rounded-[10px] bg-gray-300 px-3 py-2 ${
          inputClick && 'active_input_comment'
        }`}>
        <Input
          placeholder={'Написать комментарий'}
          disableUnderline
          ref={inputRef}
          fullWidth
          multiline
          className={`${inputClick && 'mb-[40px]'}`}
        />
        {inputClick && (
          <Button className={'absolute bottom-2 right-2 bg-blue-500 text-[12px] text-white'}>
            Отправить
          </Button>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default CreateComment;
