import React from 'react';
import {SearchIcon, AtSymbolIcon, BellIcon} from '@heroicons/react/outline';
import ProfileLogo from '../data/avatar.jpg';

const TopBar = () => {
  return (
    <div className="h-16 pl-40 fixed bg-gradient-to-r from-purple-400
    to-blue-500 w-full flex items-center justify-between pr-5">
        <div className="flex px-5 items-center">
                <SearchIcon className="w-5 h-5 text-white"/>
                <input type="text" placeholder="Search for tasks ..."
                className=" bg-transparent border-0 text-white placeholder-gray-200
                outline-none focus:ring-0 text-lg"/>
            </div>
            <div className="flex space-x-6">
                <AtSymbolIcon className="w-7 h-7 text-white"/>
                <BellIcon className="w-7 h-7 text-white"/>
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