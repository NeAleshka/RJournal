import React from 'react';
import clsx from 'clsx';
import LeftMenu from '@/componets/LeftMenu';
import {MainLayoutProps} from '@/interfaces';
import SideComments from '@/componets/SideComments';

const MainLayout = ({hideComments, contentFullWidth, className, children}: MainLayoutProps) => {
  return (
    <div className={clsx('px-[10px] pt-[80px] pt-[80px] md:flex md:px-[30px]', className)}>
      <div>
        <LeftMenu />
      </div>
      <div
        className={clsx('mx-auto w-full max-w-[640px]')}
        style={contentFullWidth ? {maxWidth: '1050px'} : {}}>
        {children}
      </div>
      {!hideComments && (
        <div className={'hidden lg:inline-flex'}>
          <SideComments />
        </div>
      )}
    </div>
  );
};

export default MainLayout;
