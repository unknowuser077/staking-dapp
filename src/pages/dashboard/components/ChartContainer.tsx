import * as React from 'react';
import { ChartContainerProps } from '../types';

export const ChartContainer: React.FC<ChartContainerProps> = ({ title, subtitle, children, buttonText }) => {
  return (
    <div className="flex flex-col px-5 pt-7 pb-12 mx-auto w-full bg-gray-800 rounded-2xl border border-solid border-white border-opacity-10 max-md:pr-5 max-md:mt-7 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full font-medium max-md:max-w-full">
        <div className="flex flex-col self-stretch my-auto leading-snug rounded-none w-[131px]">
          <div className="text-lg text-white">{title}</div>
          <div className="self-start text-xs text-blue-600">{subtitle}</div>
        </div>
        <div className="flex gap-2 justify-center items-center self-stretch p-2 my-auto text-base text-white rounded-lg border-cyan-400 border-solid bg-[linear-gradient(90deg,#30CEDF_0.15%,#1940B5_99.86%)] border-[2.214px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/71e61b76fe830af728140bdc9c6741936d4e58f0b342a747ab7b213879195686?placeholderIfAbsent=true&apiKey=54a0d932445849419575ff7258b081bd"
            alt="Connect icon"
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
          <div className="self-stretch my-auto">{buttonText}</div>
        </div>
      </div>
      {children}
    </div>
  );
};