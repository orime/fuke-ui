import React from 'react';

export const Ruler = () => {
  return (
    <div className="ruler-container" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 1000, overflow: 'hidden' }}>
      <div className="ruler-top" style={{ position: 'absolute', top: 0, left: '30px', right: 0, height: '30px', display: 'flex', borderBottom: '3px solid black', background: '#EBE5D0' }}>
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={i} style={{ width: '50px', flexShrink: 0, borderLeft: '2px solid black', position: 'relative', height: '100%' }}>
            <span style={{ position: 'absolute', top: '2px', left: '4px', fontSize: '10px', fontWeight: 'bold' }}>{i}</span>
            <div style={{ position: 'absolute', bottom: 0, left: '10px', width: '2px', height: '6px', backgroundColor: 'black' }} />
            <div style={{ position: 'absolute', bottom: 0, left: '20px', width: '2px', height: '6px', backgroundColor: 'black' }} />
            <div style={{ position: 'absolute', bottom: 0, left: '30px', width: '2px', height: '10px', backgroundColor: 'black' }} />
            <div style={{ position: 'absolute', bottom: 0, left: '40px', width: '2px', height: '6px', backgroundColor: 'black' }} />
          </div>
        ))}
      </div>
      <div className="ruler-left" style={{ position: 'absolute', top: '30px', left: 0, bottom: 0, width: '30px', display: 'flex', flexDirection: 'column', borderRight: '3px solid black', background: '#EBE5D0' }}>
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} style={{ height: '50px', flexShrink: 0, borderTop: '2px solid black', position: 'relative', width: '100%' }}>
            <span style={{ position: 'absolute', top: '4px', left: '2px', fontSize: '10px', fontWeight: 'bold', transform: 'rotate(-90deg)' }}>{i}</span>
            <div style={{ position: 'absolute', right: 0, top: '10px', height: '2px', width: '6px', backgroundColor: 'black' }} />
            <div style={{ position: 'absolute', right: 0, top: '20px', height: '2px', width: '6px', backgroundColor: 'black' }} />
            <div style={{ position: 'absolute', right: 0, top: '30px', height: '2px', width: '10px', backgroundColor: 'black' }} />
            <div style={{ position: 'absolute', right: 0, top: '40px', height: '2px', width: '6px', backgroundColor: 'black' }} />
          </div>
        ))}
      </div>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '30px', height: '30px', borderRight: '3px solid black', borderBottom: '3px solid black', background: '#EBE5D0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '10px', height: '10px', border: '2px solid black', borderBottom: 'none', borderRight: 'none' }} />
      </div>
    </div>
  );
};
