import { CircularProgress } from '@mui/material';
import { Button as MuiButton } from '@mui/material';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  variant?: 'text' | 'contained' | 'outlined';
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button = (
  props: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <MuiButton
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      {...props}
      ref={ref}
      disabled={props.disabled || props.loading}
    >
      {props.children}
    </MuiButton>
  );
};

export default React.forwardRef(Button);
