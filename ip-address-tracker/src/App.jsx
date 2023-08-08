import { useState } from 'react';

import mobileBg from './assets/pattern-bg-mobile.png';
import desktopBg from './assets/pattern-bg-desktop.png';

import SearchBar from './components/SearcBar';
function App() {


  return (
    <>
      <div className="main-wrapper relative">
        <div className="h-auto">
          <img className="w-full" src={mobileBg} alt="" aria-hidden="true" />
          <img className="w-full sm:hidden " src={desktopBg} alt="" aria-hidden="true" />
        </div>

        <SearchBar />

      </div>
    </>
  )
}

export default App
