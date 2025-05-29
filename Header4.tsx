import * as React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center px-4 pt-4 pb-2 w-full bg-neutral-900">
      <div className="flex items-center self-stretch my-auto w-12 min-h-12">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f954022f9853569f6b634328f58e629e0f5fa31f?placeholderIfAbsent=true&apiKey=c65bb1da79de479090cc0695efd45d5a"
          className="object-contain self-stretch my-auto w-6 aspect-square"
          alt="Menu"
        />
      </div>
      <h1 className="flex-1 shrink self-stretch my-auto text-lg font-bold leading-none text-center text-white basis-0 min-h-[23px] min-w-60">
        Good Morning, Aarav 👋
      </h1>
      <div className="flex items-center self-stretch my-auto w-12">
        <div className="flex overflow-hidden gap-2 justify-center items-center self-stretch my-auto w-6 rounded-3xl max-w-[480px] min-h-12">
          <div className="flex-1 shrink self-stretch my-auto w-full basis-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/37b7cff20d7451c7137f24276ffe93732238495f?placeholderIfAbsent=true&apiKey=c65bb1da79de479090cc0695efd45d5a"
              className="object-contain flex-1 w-full aspect-square"
              alt="Profile avatar"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
