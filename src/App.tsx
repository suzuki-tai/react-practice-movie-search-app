import React from 'react';
import { Link, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Modal from './components/Modal';
import SearchMovie from './components/SearchMovie';

const App = () => {
  const location = useLocation();

  const state = location.state as { backgroundLocation?: Location};

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path='/' element={<Layout />}>
          <Route path='home' element={<Home />} />
          <Route path='search' element={<SearchMovie />} />
          <Route path='/detail/:imdbId' element={<Modal />} />
        </Route>
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path='/detail/:imdbId' element={<Modal />} />
        </Routes>
      )}
    </>
  );
};

const Layout = () => {
  return (
    <div>
      <Header text="Movie Search APP" />
      <nav className='home-navigator'>
        <Link className='home-link' to='/home'>Home</Link>
      </nav>
      <nav className='search-movie-navigator'>
        <Link className='search-condition-link' to='/search'>Search</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
