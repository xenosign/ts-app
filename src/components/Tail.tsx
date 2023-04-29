import React, { useState } from "react";

export default function Tail() {
  const [toggle, setToggle] = useState<boolean>(false);

  // 핸들러
  const toggleMenu = (): void => {
    setToggle((cur: boolean) => !cur);
  };

  return (
    <nav className="w-auto pl-10 pr-10 bg-slate-100">
      <div className="flex justify-between py-5">
        <ul className="flex gap-16">
          <li className="py-2 flex font-extrabold cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2 text-orange-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
              />
            </svg>
            <span>TETZ</span>
          </li>
          <li className="hidden md:block py-2 font-semibold cursor-pointer text-slate-500">
            Menu1
          </li>
          <li className="hidden md:block py-2 font-semibold cursor-pointer text-slate-500">
            Menu2
          </li>
          <li className="hidden md:block py-2 font-semibold cursor-pointer text-slate-500">
            Menu3
          </li>
        </ul>
        <a
          href="#"
          className="hidden md:block py-2 px-3 text-white font-bold bg-orange-500 hover:bg-slate-600 rounded transition duration-300"
        >
          Login
        </a>

        {/* 모바일 메뉴 파트 */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 mr-2 text-orange-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 토글 파트!!! */}
      <div className={toggle ? "md:hidden py-3" : "hidden py-3"}>
        <a href="#" className="block py-2 px-4 hover:bg-slate-200">
          Menu1
        </a>
        <a href="#" className="block py-2 px-4 hover:bg-slate-200">
          Menu2
        </a>
        <a href="#" className="block py-2 px-4 hover:bg-slate-200">
          Menu3
        </a>
      </div>
    </nav>
  );
}
