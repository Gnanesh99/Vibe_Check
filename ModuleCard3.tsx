"use client";
import React from 'react';

interface ModuleCardProps {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({
  category,
  title,
  description,
  imageUrl,
}) => {
  return (
    <article className="flex justify-between items-start self-stretch rounded-xl">
      <div className="flex flex-col gap-1 items-start w-[228px] max-md:w-[65%] max-sm:w-3/5">
        <p className="self-stretch text-sm leading-5 text-gray-400">{category}</p>
        <h3 className="self-stretch text-base font-bold leading-5 text-white">{title}</h3>
        <p className="self-stretch text-sm leading-5 text-gray-400">{description}</p>
      </div>
      <img
        src={imageUrl}
        alt=""
        className="rounded-xl flex-[1_0_0] h-[91px] max-md:w-[30%] max-sm:h-20 max-sm:w-[35%]"
      />
    </article>
  );
};
