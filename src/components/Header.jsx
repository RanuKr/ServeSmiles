import React from 'react';
import headerImage from '../images/children bg.jpg'; // Corrected image path

const Header = () => {
  return (
    <header>
       <h1>ServeSmiles Events</h1>
      <img src={headerImage} alt="Header Image" />
     
      {/* Add navigation links or other header content here */}
      
    </header>
  );
};

export default Header;
