import * as React from 'react';
import { FeatureCardProps } from './types';


export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-8 text-white rounded-xl bg-white bg-opacity-10">
      <i className={`ti ti-${icon} mb-5 text-3xl text-cyan-400`} />
      <div className="mb-4 text-2xl font-semibold">{title}</div>
      <div className="leading-relaxed text-zinc-500">{description}</div>
    </div>
  );
};