import React, { useEffect } from 'react';
/* import { SearchIcon, AtSymbolIcon, BellIcon } from '@heroicons/react/outline'; */
import ProfileLogo from '../data/avatar.jpg';
import { useStateContext } from '../contexts/ContextProvider';
import Tippy from '@tippyjs/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';


const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <Tippy content={title} position="BottomCenter">
      <button
        type="button"
        onClick={() => customFunc()}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </Tippy>
  );

const TopBar = () => {
    const { activeMenu, setActiveMenu, setScreenSize, screenSize } = useStateContext();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 900) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    const handleActiveMenu = () => setActiveMenu(!activeMenu);
    return (      
            <div className="flex justify-between p-1 relative bg-gradient-to-r from-purple-400
            to-blue-500 w-full items-center pr-5">
                <NavButton title="Menu" customFunc={handleActiveMenu} color="blue" icon={<AiOutlineMenu />} />
            
            <div className="flex px-5 items-center">
            

                <BiSearch  className="h-7 w-7 text-white"/>
                <input type="text" placeholder="Search for tasks ..."
                className=" bg-transparent border-0 text-white placeholder-gray-200
                outline-none focus:ring-0 text-lg"/>
            </div>
            <div className="flex space-x-6">
                {/* <AtSymbolIcon className="w-17 h-17 text-white"/>
                <BellIcon className="w-17 h-17 text-white"/> */}
                <div className="flex items-center text-white">
                    <h3 className="font-bold mr-3">Alex Jones</h3>
                    <img
                      className="rounded-full h-10 w-10 object-cover"
                      src={ProfileLogo}
                      alt="user-profile"
                    />
                </div>
            
        </div>
    </div>

        
        

    )
}

export default TopBar