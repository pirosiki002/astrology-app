// components/TransparentBox.tsx
import React from 'react';
import classes from 'src/components/transparent/transparentBox.module.css';

interface TransparentBoxProps {
  children?: React.ReactNode;
}

const TransparentBox: React.FC<TransparentBoxProps> = ({ children }) => {
  return <div className={classes.transparentBox}>{children}</div>;
};

export default TransparentBox;
