import { ElementType } from 'react';
import { LoadingButtonProps } from '@mui/lab';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    contained: true;
    light: true;
    text: true;
    link: true;
  }

  interface ButtonPropsColorVariantOverrides {
    primary: true;
    success: true;
    warning: true;
    error: true;
  }
}

export type ButtonProps = Omit<LoadingButtonProps, 'variant' | 'color'> & {
  variant?: 'contained' | 'light' | 'text' | 'link';
  color?: 'primary' | 'success' | 'warning' | 'error';
  // https://github.com/mui/material-ui/issues/30038
  component?: ElementType;
};
