import * as React from "react";

function BottomNavigation() {
  const navItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0a92cc55cf31223d3016b5c0685285ade4be4f61?placeholderIfAbsent=true&apiKey=c65bb1da79de479090cc0695efd45d5a", label: "Home", isActive: true },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f8932f6f0f118cbdfab0615228b0f32ac39dbf31?placeholderIfAbsent=true&apiKey=c65bb1da79de479090cc0695efd45d5a", label: "Community", isActive: false },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e4b0ab7fe208e870ab726ab8d09f23eb19f6fcf?placeholderIfAbsent=true&apiKey=c65bb1da79de479090cc0695efd45d5a", label: "Explore", isActive: false },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/36d60ae45e0504e08a8680322ae6e48203e8b8ca?placeholderIfAbsent=true&apiKey=c65bb1da79de479090cc0695efd45d5a", label: "Profile", isActive: false }
  ];

  return (
    <nav className="flex gap-2 items-start px-4 pt-2 pb-3 w-full border-t border-gray-800 bg-neutral-800">
      {navItems.map((item, index) => (
        <div key={index} className="flex flex-col flex-1 shrink items-center rounded-3xl basis-0">
          <div className="flex justify-center items-center w-6 min-h-8">
            <img
              src={item.icon}
              className="object-contain flex-1 shrink self-stretch my-auto w-full aspect-square basis-0"
              alt={item.label}
            />
          </div>
          <span className={`mt-1 text-xs font-medium whitespace-nowrap ${
            item.isActive ? 'text-white' : 'text-gray-400'
          }`}>
            {item.label}
          </span>
        </div>
      ))}
    </nav>
  );
}

export default BottomNavigation;

