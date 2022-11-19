import cn from 'classnames';
import React, { forwardRef, useRef, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

import Image from "next/image";

interface Props {
  src?: string;
  className?: 'slim' | 'flat';
  width?: number;
  height?: number;
}

const MyImage = ((props: Props) => {
  const {
    src = '',
    className,
    width = 250,
    height = 250,
    style = {},
    ...rest
  } = props;
  const rootClassName = cn(
    styles.root,
    className
  );
  const basePath = '/0T1JP'
  return (
    <Image
      width={width}
      height={height}
      src={`${basePath}/${src}`}
      className={rootClassName}
      style={{
        ...style
      }}
    />
  );
});

export default MyImage;
