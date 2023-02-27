import React, {useState} from 'react';
import {EllipsisHorizontalIcon, UserCircleIcon} from '@heroicons/react/24/solid';
import {Menu, MenuItem} from '@mui/material';
import {IPostComment} from '@/interfaces';
import Image from 'next/image';

const PostComment = ({comment, userName, createAt, avatar}: IPostComment) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={'mb-4 border-b'}>
      <div className={'mb-4 flex items-center'}>
        <Image
          src={avatar}
          width={0}
          height={0}
          alt={'avatar'}
          className={'mr-2 w-[30px] cursor-pointer'}
        />
        <div className={'mr-2 font-medium'}>{userName}</div>
        <div className={'pb-[7px] text-[12px] text-gray-400'}>{createAt}</div>
      </div>
      <div className={'mb-7'}>{comment}</div>
      <div className={'mb-4 flex items-center'}>
        <div className={'mr-2'}>Ответить</div>
        <div className={'circle_hover_bg hover:bg-gray-100'}>
          <EllipsisHorizontalIcon className={'icon'} onClick={handleClick} />
        </div>
        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          elevation={2}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}>
          <MenuItem onClick={handleClose}>Удалить</MenuItem>
          <MenuItem onClick={handleClose}>Редактировать</MenuItem>
        </Menu>
      </div>
    </div>
  );
};
export default PostComment;
