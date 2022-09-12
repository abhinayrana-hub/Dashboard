import React, { createContext, useContext, useState } from 'react';
import BoardData from '../data/board-data.json';

const StateContext = createContext();

const initialState = {
  bell: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [ready, setReady] = useState(false);
  const [boardData, setBoardData] = useState(BoardData);
  const [showForm, setShowForm] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState(0);



  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, 
    isClicked, initialState, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode,
     setColor, themeSettings, setThemeSettings, ready, setReady, boardData, setBoardData, showForm, setShowForm,
     selectedBoard, setSelectedBoard}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
