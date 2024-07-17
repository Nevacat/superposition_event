import Image from 'next/image';
import React from 'react';

interface ConfirmModalProps {
  confirms: {
    status: boolean;
    message: string;
    type: string;
  };
  setConfirms: React.Dispatch<
    React.SetStateAction<{
      status: boolean;
      message: string;
      type: string;
    }>
  >;
}

const ConfirmModal = ({ confirms, setConfirms }: ConfirmModalProps) => {
  return (
    <div
      className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center  rounded-md'
      onClick={() => setConfirms({ status: false, message: '', type: '' })}
    >
      <div
        className='bg-[#1d1e22] p-4 rounded-lg min-w-[275px] min-h-[135px] flex items-center justify-center flex-col gap-4 relative overflow-hidden'
        onClick={(e) => e.stopPropagation()} // Prevent click event from propagating to the background
      >
        <p className='text-[#fefefe] text-sm font-bold text-center'>{confirms.message}</p>
        {confirms.type === 'success' && (
          <p className='text-xs text-[#797979] text-center'>
            가을이 오기 전<br /> 재빠르게 올게요!
          </p>
        )}
        <div className='rounded-full w-[87px] h-[87px] bg-[#262AC4] absolute -left-9 -top-9'></div>
        <Image
          src={'/lime.webp'}
          alt='라임원'
          width={60}
          height={60}
          className='absolute -right-7 bottom-10'
        />
        <button
          className='text-[#b8b8b8] text-sm font-bold text-center'
          onClick={() => setConfirms({ status: false, message: '', type: '' })}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default ConfirmModal;
