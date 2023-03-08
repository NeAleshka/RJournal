import React, {useState} from 'react';
import Button from '@/componets/Button';
import {CheckIcon, PlusIcon} from '@heroicons/react/24/solid';

const FollowButton = () => {
  const [followed, setFollowed] = useState(false);
  return (
    <Button className={'bg-white'} onClick={() => setFollowed(!followed)}>
      {!followed ? (
        <PlusIcon className={'icon w-[15px] text-black'} />
      ) : (
        <CheckIcon className={'icon w-[15px] text-green-600'} />
      )}
    </Button>
  );
};

export default FollowButton;
