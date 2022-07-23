import React from 'react';

const Header = (props : {text: string}) => {
  return (
    <header className="App-header">
      <h2>{props.text}</h2>
    </header>
  );
};

export default Header;
