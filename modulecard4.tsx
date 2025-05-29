import * as React from "react";

interface ModuleCardProps {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

function ModuleCard({ category, title, description, imageUrl }: ModuleCardProps) {
  return (
    <article className="flex flex-col justify-center p-4 w-full text-sm text-gray-400">
      <div className="flex justify-between items-start w-full rounded-xl">
        <div className="w-[228px]">
          <p className="w-full">{category}</p>
          <h3 className="mt-1 w-full text-base font-bold leading-none text-white min-h-5">
            {title}
          </h3>
          <p className="mt-1 w-full leading-5">{description}</p>
        </div>
        <img
          src={imageUrl}
          className="object-contain flex-1 shrink rounded-xl aspect-[1.43] basis-0 w-[130px]"
          alt={title}
        />
      </div>
    </article>
  );
}

export default ModuleCard;
