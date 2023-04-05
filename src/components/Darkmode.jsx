import React, { useState } from 'react';

const Darkmode = ({ isDark, onClick }) => {
  const [isDarkMode, setIsDarkMode] = useState(isDark);

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
    onClick(!isDarkMode);
  }

  return (
    <div className="container">
      <div className={isDarkMode ? 'background black_bg' : 'background'}>
        <div className={isDarkMode ? 'stars newstar' : 'stars'}>
          <div className="star1"></div>
          <div className="star2"></div>
          <div className="star3"></div>
          <div className="star4"></div>
          <div className="star5"></div>
          <div className="star6"></div>
          <div className="star7"></div>
          <div className="star8"></div>
          <div className="star9"></div>
          <div className="star10"></div>
        </div>

        <div className={isDarkMode ? 'cloud down' : 'cloud'}>
          <div className="c1"></div>
          <div className="c2"></div>
          <div className="c3"></div>
          <div className="c4"></div>
          <div className="c5"></div>
          <div className="c6"></div>
        </div>
        <div className="shadow"></div>

        <div className={isDarkMode ? 'background_sphere right' : 'background_sphere'}>
          <div
            className={isDarkMode ? 'sphere' : 'sphere'}
            onClick={handleClick}
          >
            <div className={isDarkMode ? 'moon center' : 'moon'}>
              <div className="crater1"></div>
              <div className="crater2"></div>
              <div className="crater3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Darkmode;