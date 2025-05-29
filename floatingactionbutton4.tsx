import * as React from "react";

function FloatingActionButton() {
  return (
    <div className="flex overflow-hidden items-start px-5 pb-5 w-full">
      <button className="flex overflow-hidden gap-4 justify-center items-center pr-6 pl-4 w-16 bg-violet-600 rounded-3xl max-w-[480px] min-h-14">
        <div className="flex-1 shrink self-stretch my-auto w-full basis-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cb5cc0a653742657869e96eed43e9015e7cc23f?placeholderIfAbsent=true&apiKey=c65bb1da79de479090cc0695efd45d5a"
            className="object-contain flex-1 w-full aspect-square"
            alt="Action button"
          />
        </div>
      </button>
    </div>
  );
}

export default FloatingActionButton;
