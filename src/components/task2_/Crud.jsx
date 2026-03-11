import './Crud.css';
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
// import { useEffect, useState } from 'react'; // useNavigate()
import { useNavigate } from 'react-router-dom';


function Crud() {
  return (
    <div className='task2'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/new" element={<HomePage />} />
      </Routes>
    </div>
  )
};

export default Crud;