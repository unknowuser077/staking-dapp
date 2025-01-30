import * as React from 'react';
import { FooterLinkProps } from './types';

export const FooterLink: React.FC<FooterLinkProps> = ({ text }) => {
  return <div className="text-sm text-white no-underline">{text}</div>;
};