import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomeLayout from '../layouts/Pages/Home/HomeLayout';
import BrowseLayout from '../layouts/Pages/Browse/BrowseLayout';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout />} />
      <Route path='/browse' element={<BrowseLayout />} />
      <Route path='/artists' element={''} />
      <Route path='/favorite' element={''} />
      <Route path='/albums' element={''} />
      <Route path='/recents' element={''} />
      <Route path='/myplaylist' element={''} />
    </Routes>
  );
}
