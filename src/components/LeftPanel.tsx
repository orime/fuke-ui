import React from 'react';

export const LeftPanel = () => {
  return (
    <div style={{ width: '260px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '30px', paddingTop: '10px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h1 style={{ fontSize: '72px', margin: 0, lineHeight: 1, letterSpacing: '4px' }}>光流 AI</h1>
        <h2 style={{ fontSize: '56px', margin: 0, lineHeight: 1, letterSpacing: '2px' }}>风格指南</h2>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>COLOR TOKENS</h3>
        <div style={{ display: 'flex', gap: '12px' }}>
          {[
            { color: '#000000', hex: '#000000', label: '#: 900000' },
            { color: '#06FBBE', hex: '#06FBBE', label: '#: 8000E0' },
            { color: '#000E50', hex: '#000E50', label: '#: 8CF51' },
            { color: '#FFFFFF', hex: '#FFFFFF', label: '' }
          ].map((token, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ 
                width: '52px', height: '40px', 
                backgroundColor: token.color, 
                border: '2px solid black',
              }} />
              <div style={{ fontSize: '12px', fontFamily: 'monospace' }}>
                <div>{token.hex}</div>
                {token.label && <div style={{ color: '#888', fontSize: '10px' }}>{token.label}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '24px' }}>TYPOGRAPHY SCALE</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ fontSize: '28px' }}>01. 内容策略 (CONTEXT)</div>
          <div style={{ fontSize: '24px' }}>A2. 用答库 (Topic)</div>
          <div style={{ fontSize: '18px' }}>A3. 通用带货 (Topic)</div>
          <div style={{ fontSize: '16px' }}>A4. 高用带库 (Topic)</div>
          <div style={{ fontSize: '14px' }}>A5. 反应反馈 (Topic)</div>
          <div style={{ fontSize: '12px' }}>A6. 读惹传 (Topic)</div>
        </div>
      </div>
    </div>
  );
};
