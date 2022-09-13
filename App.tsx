import React from 'react';
import { ColorModeProvider } from './src/components';
import Login from './src/views/login';

export default function App() {
  return (
    <ColorModeProvider>
      <Login />
    </ColorModeProvider>
  );
}
