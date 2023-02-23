import React from 'react';
import clsx from 'clsx';
import LeftMenu from '@/componets/LeftMenu';
import {MainLayoutProps} from '@/interfaces';
import SideComments from '@/componets/SideComments';
import {useDeviceSize} from '@/hooks';

const MainLayout = ({hideComments, contentFullWidth, className, children}: MainLayoutProps) => {
  return (
    <div className={clsx('pt-[80px] px-[10px] md:flex pt-[80px] md:px-[30px]', className)}>
      <div>
        <LeftMenu />
      </div>
      <div className={clsx('max-w-[640px] w-full mx-auto', {'content--full': contentFullWidth})}>
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
