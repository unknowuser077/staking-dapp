import * as React from 'react';
import { SocialIconProps } from './types';

export const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => {
  return (
    <div className="flex justify-center items-center w-10 h-10 text-white rounded-lg">
      <i className={`ti ti-brand-${icon}`} />
    </div>
  );
};