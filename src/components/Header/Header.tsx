import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';



const Header = () => {
  const navigation = [{ name: 'Note Keeper', href: '/' }];

  return (
    <div className="relative bg-gray-800 overflow-hidden shadow py-8">
      <div className="mx-auto container">
        <div className="relative z-10 pb-2 bg-gray-800 lg:max-w-2xl lg:w-full xl:pb-2">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative md:pt-6 px-5">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <Link to="/">
                      <span className="sr-only">Note Keeper App</span>
                      <img
                        alt="Note Keeper Logo"
                        src="https://play-lh.googleusercontent.com/JkMUBwRS2lt5TKtKzXurWvjh7hv-s7XTmHgyoxU17Wok5La1XT4nW7akjZp4szqGOp6l=w240-h480-rw"
                        className="h-20 w-20"
                      />
                    </Link>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open menu</span>
                        <MenuIcon
                          className="h-10 w-10"
                          aria-hidden="true"
                        />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="font-medium text-white text-3xl hover:text-gray-300" // Increase the font size here
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>

            {/* ... (remaining code) */}
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Header;
