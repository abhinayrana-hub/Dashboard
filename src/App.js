import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Manage, AddProject, Board , Schedule, Report, Settings } from './pages';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
/* import Tippy from '@tippyjs/react';
import { FiSettings } from 'react-icons/fi'; */
import { useStateContext } from './contexts/ContextProvider';



const App = () => {

    const { activeMenu } = useStateContext();

    /* useEffect(() => {
      const currentThemeColor = localStorage.getItem('colorMode');
      const currentThemeMode = localStorage.getItem('themeMode');
      if (currentThemeColor && currentThemeMode) {
        setCurrentColor(currentThemeColor);
        setCurrentMode(currentThemeMode);
      }
        }, []); */

        return(
            
    <div className='min-w-full min-h-screen  h-screen overflow-hidden bg-blue-100'>
        <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {/* <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <Tippy
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => {}}
                style={{ background: 'cyan', borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings >x</FiSettings>
              </button>

            </Tippy>
          </div> */}

           

          {activeMenu ? (
            <div className="w-50 fixed dark:bg-secondary-dark-bg bg-purple-200">
              <SideBar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <SideBar />
            </div>
          )}
          <div
            className={ `flex flex-col dark:bg-main-dark-bg  bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-[202px]' : 'flex-2'
          }`
            }
          >
            
            
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg w-full ">
              <TopBar />
            </div>
            
            <div>
              {/* {themeSettings && (<ThemeSettings />)} */}

               <Routes>
                                {/* pages  */}
                                <Route path="/" element={<AddProject />} />
                                <Route path="/manage" element={<Manage />} />
                                <Route path="/addproject" element={<AddProject />} />
                                <Route path="/board" element={<Board />} />
                                <Route path="schedule" element={<Schedule />} />
                                <Route path="/report" element={<Report />} />
                                <Route path="/settings" element={<Settings />} />
                            </Routes>
            </div>

        </div>
            
          </div>
        
      </BrowserRouter>
    </div>
    
        );
    }

    export default App;
