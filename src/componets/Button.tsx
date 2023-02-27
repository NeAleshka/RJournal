import React, {DetailedHTMLProps, HTMLAttributes} from 'react';

type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = ({children, className, ...rest}: DefaultSpanPropsType) => {
  return (
    <button
      {...rest}
      className={`rounded-xl border py-2 px-4 font-bold shadow-md transition duration-200 active:scale-90 ${className}`}>
      {children}
    </button>
  );
};

export default Button;
