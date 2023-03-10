import React from 'react';

export interface MainLayoutProps {
  hideComments?: boolean;
  contentFullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

export interface IPostProps {
  id?: string;
  title: string;
  description: string;
  imgUrl: string;
}

export interface IMenuItem {
  text: string;
  icon: React.ReactNode;
  path: string;
}

export interface IItemComment {
  avatar: string;
  userName: string;
  comment: string;
  commentTitle: string;
  postId: string;
}

export interface IPostComment extends Omit<IItemComment, 'commentTitle'> {
  createAt: string;
  id: string;
}

export interface ISideComment {
  user: {fullName: string};
  text: string;
  post: {title: string};
}

export interface ISortComments {
  sortComments: 'popular' | 'date';
  setSortComments: (sortComments: 'popular' | 'date') => void;
}

export interface IEntrance {
  open: boolean;
  setOpen: (open: boolean) => void;
}
