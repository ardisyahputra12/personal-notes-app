import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NoteDetailsPage from './pages/NoteDetailsPage';
import AddNotePage from './pages/AddNotePage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className='app-container'>
      <header>
        <Link to='/' className='text-white'>
          <h1 className='text-center'>Aplikasi Catatan</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path='*' element={<ErrorPage />} />
          <Route path='/'>
            <Route index element={<HomePage />} />
            <Route path='notes'>
              <Route index element={<HomePage />} />
              <Route path=':id' element={<NoteDetailsPage />} />
              <Route path='new' element={<AddNotePage />} />
            </Route>
          </Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
