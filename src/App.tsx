import React from 'react';
import { Ruler } from './components/Ruler';
import { LeftPanel } from './components/LeftPanel';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { RightPanel } from './components/RightPanel';

function App() {
  return (
    <>
      <Ruler />
      <div className="app-wrapper">
        <div style={{ display: 'flex', gap: '40px', padding: '30px 40px', flex: 1, maxWidth: '100%', overflowX: 'auto', minHeight: 'calc(100vh - 30px)' }}>
          <LeftPanel />
          <Sidebar />
          <MainContent />
          <RightPanel />
        </div>
      </div>
    </>
  );
}

export default App;
