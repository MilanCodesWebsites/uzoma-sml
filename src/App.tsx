import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import PrizePage from './components/PrizePage';
import { prizes } from './data/prizeData';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {prizes.map((prize) => (
          <Route 
            key={prize.id}
            path={`/prize/${prize.code}`}
            element={<PrizePage {...prize} />}
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;