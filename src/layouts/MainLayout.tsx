import React from 'react';
import clsx from 'clsx';
import LeftMenu from '@/componets/LeftMenu';

interface MainLayoutProps {
  hideComments?: boolean;
  contentFullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

const MainLayout = ({hideComments, contentFullWidth, className, children}: MainLayoutProps) => {
  return (
    <div className={clsx('flex pt-[80px] px-[30px]', className)}>
      <LeftMenu />

      <div className={clsx('max-w-[640px] w-full mx-auto', {'content--full': contentFullWidth})}>
        {children}
      </div>
      {!hideComments && <div className='rightSide'>{/*<SideComments />*/}</div>}
    </div>
  );
};

export default MainLayout;
