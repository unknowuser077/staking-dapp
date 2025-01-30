import * as React from 'react';
import { StatCardProps } from './types';

export const StatCard: React.FC<StatCardProps> = ({ icon, label, value, alt }) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-1.5 items-end text-sm text-stone-300">
        <img
          loading="lazy"
          src={icon}
          alt={alt || `${label} icon`}
          className="object-contain shrink-0 w-5 aspect-square"
        />
        <div>{label}</div>
      </div>
      <div className="mt-3.5 text-xl font-medium text-white">{value}</div>
    </div>
  );
};