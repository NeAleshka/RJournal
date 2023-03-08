import MainLayout from '@/layouts/MainLayout';
import FullPost from '@/componets/FullPost';
import PostComments from '@/componets/PostComments';

export default function fullPost() {
  return (
    <MainLayout contentFullWidth={true} className={'mb-[50px]'}>
      <FullPost />
      <PostComments />
    </MainLayout>
  );
}
