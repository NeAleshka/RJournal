import React, {DetailedHTMLProps} from 'react';

type DefaultSpanPropsType = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({children, className, type, disabled, ...rest}: DefaultSpanPropsType) => {
  return (
    <button
      type={type ? type : 'button'}
      {...rest}
      className={`rounded-xl border 
      ${!className?.includes('bg-') && `${disabled ? 'bg-gray-500' : 'bg-blue-400'}`} 
      ${!className?.includes('text-') && 'text-white'} 
       py-2 px-4 font-bold shadow-md ${
         !disabled && 'transition duration-200 active:scale-90'
       }  ${className}`}>
      {children}
    </button>
  );
};

export default Button;
