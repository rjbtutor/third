import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Gallery = React.lazy(() => import('gallery/Module'));
const Upload = React.lazy(() => import('upload/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/upload">Upload</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
