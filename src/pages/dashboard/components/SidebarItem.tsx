import * as React from 'react';
import { SidebarItemProps } from '../types';

export const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, isActive, alt }) => {
  const baseClasses = "flex gap-2.5 items-center py-2.5 pl-2 text-base font-medium text-white whitespace-nowrap";
  const activeClasses = isActive ? "rounded-md bg-[linear-gradient(90deg,#30CEDF_0.15%,#1940B5_99.86%)]" : "rounded-lg";

  return (
    <div className={`${baseClasses} ${activeClasses}`}>
      <img
        loading="lazy"
        src={icon}
        alt={alt || `${label} icon`}
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
      />
      <div className="self-stretch my-auto">{label}</div>
    </div>
  );
};