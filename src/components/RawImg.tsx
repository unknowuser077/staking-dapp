import * as React from 'react';
import { RawImgProps } from './types';

export const RawImg: React.FC<RawImgProps> = ({ image, altText, className = '' }) => {
  return <img src={image} alt={altText} className={className} />;
};