import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import menu from "../Assets/menu.png";
import search from "../Assets/search.png";

const mobilePopover = [
  {
    name: "Collections",
    href: "#Collections",
  },
  {
    name: "Activity",
    href: "#Activity",
  },
  {
    name: "Blog",
    href: "#Blog",
  },
];

const navigation = () => {
  return (
    <div className="App font-Grotesk">
      <Popover className="relative bg-white">
        {({ open }) => (
          <>
            <div className="max-w-100% mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start md:p-8 lg:w-0 lg:flex-1">
                  <a href="/">
                    <span className="sr-only">LOGO</span>
                    <h1 className="text-4xl font-bold">MamiWOTA</h1>
                  </a>
                </div>

                {/* Menu bar for small screens */}

                <div className="-mr-2 -my-2 lg:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                    <span className="sr-only">Open menu</span>
                    <img src={menu} alt="menu"></img>
                  </Popover.Button>
                </div>

                {/* Navigation on big screens */}

                <div className="hidden lg:flex text-lg">
                  <div className="flex mr-72">
                    <input
                      className="h-14 border w-96 pl-20 "
                      placeholder="Search artworks..."
                    ></input>
                    <button className="w-20 -ml-96 mr-96">
                      <img
                        src={search}
                        alt="search"
                        className="h-5 m-auto"
                      ></img>
                    </button>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-end md:flex-1 lg:w-0 text-lg">
                  <div className="space-x-10 -ml">
                    <a href="#Collections">Collections</a>
                    <a href="#Activity">Activity</a>
                    <a href="#Blog">Blog</a>
                  </div>
                  <a
                    href="#connect"
                    className="transition duration-700 hover:scale-125 ml-10 whitespace-nowrap inline-flex items-center justify-center px-6 py-4 border border-transparent shadow-sm md:text-xl font-medium text-white bg-black hover:bg-secondary hover:text-black"
                  >
                    Connect a Wallet
                  </a>
                </div>
              </div>
            </div>

            {/* content of menu on small screens */}
            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h1 className="text-4xl font-bold">MamiWOTA</h1>
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {mobilePopover.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                          >
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.name}
                            </span>
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    <div className="flex gap-y-4 gap-x-8">
                      <input
                        className="w-11/12 h-14 pl-10 shadow-sm"
                        placeholder="Search artworks..."
                      ></input>
                      {/* <button className='-ml-96 w-20 md:-ml-24 shadow-sm'>
                        <img src={search} className='h-5 m-auto'></img>
                      </button> */}
                    </div>
                    <div>
                      <a
                        href="#connect"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-indigo-700"
                      >
                        Connect a Wallet
                      </a>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default navigation;
