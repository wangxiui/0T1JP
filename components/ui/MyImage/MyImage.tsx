import cn from 'classnames';
import React, { forwardRef, useRef, ButtonHTMLAttributes } from 'react';
import styles from './MyImage.module.scss';

import Image from "next/image";

interface Props {
  src?: string;
  className?: string;
  width?: number;
  height?: number;
  style?: {[p in string]: any};
  alt?: string;
  [p: string]: any
}

const MyImage = ((props: Props) => {
  const {
    src = '',
    className,
    width = 250,
    height = 250,
    style = {},
    alt = '',
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
      alt={alt}
      style={{
        ...style
      }}
    />
  );
});

export default MyImage;
