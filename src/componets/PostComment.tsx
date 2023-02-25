import React, {useState} from 'react';
import {EllipsisHorizontalIcon, UserCircleIcon} from '@heroicons/react/24/solid';
import {Menu, MenuItem} from '@mui/material';

const PostComment = () => {
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
        <UserCircleIcon className={'mr-2 w-[30px] cursor-pointer'} />
        <div className={'mr-2 font-medium'}> Master Dogway</div>
        <div className={'pb-[7px] text-[12px] text-gray-400'}>5 часов</div>
      </div>
      <div className={'mb-7'}>Много раз летал на Wizz Air, и все было хорошо</div>
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
