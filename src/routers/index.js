import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomeLayout from '../layouts/Home/HomeLayout';
import MusicLayout from '../layouts/Musics/Musics';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout />} />
      <Route path='/musics' element={<MusicLayout />} />
      <Route path='/artists' element={''} />
      <Route path='/favorite' element={''} />
      <Route path='/albums' element={''} />
      <Route path='/recents' element={''} />
      <Route path='/myplaylist' element={''} />
    </Routes>
  );
}
