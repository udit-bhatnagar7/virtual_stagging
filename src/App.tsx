/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomeV1 from './pages/HomeV1';
import HomeV2 from './pages/HomeV2';
import HomeV3 from './pages/HomeV3';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/v1" element={<HomeV1 />} />
        <Route path="/v2" element={<HomeV2 />} />
        <Route path="/v3" element={<HomeV3 />} />
        <Route path="*" element={<Navigate to="/v3" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
