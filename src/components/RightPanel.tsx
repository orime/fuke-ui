import React from 'react';
import { Plus, Layout, Layers, Moon } from 'lucide-react';

export const RightPanel = () => {
  const dotBgStyle = {
    position: 'absolute' as const,
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundImage: 'var(--dot-pattern)',
    backgroundSize: '16px 16px',
    backgroundPosition: '0 0',
    pointerEvents: 'none' as const,
    opacity: 0.5
  };

  return (
    <div style={{ width: '260px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
      
      {/* Box 1 */}
      <div style={{ flex: 1, border: '2px solid black', background: '#FFFFFF', position: 'relative', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={dotBgStyle} />
        
        <div style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1, background: '#FFFFFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px' }}>
            <Layout size={18} />
            产品素材
          </div>
          <div style={{ background: '#06FBBE', border: '2px solid black', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '2px 2px 0 #000', cursor: 'pointer' }}>
            <Plus size={16} strokeWidth={3} />
          </div>
        </div>

        <div style={{ padding: '0 16px 16px', position: 'relative', zIndex: 1, flex: 1, display: 'flex' }}>
          <div style={{ width: '100%', border: '2px dashed black', height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#FFFFFF', cursor: 'pointer' }}>
            <Plus size={24} strokeWidth={2} />
            <span style={{ fontSize: '12px' }}>上确素材</span>
          </div>
        </div>
      </div>

      {/* Box 2 */}
      <div style={{ flex: 1, border: '2px solid black', background: '#FFFFFF', position: 'relative', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={dotBgStyle} />
        
        <div style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1, background: '#FFFFFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px' }}>
            <Layers size={18} />
            排版参考库
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
             <div style={{ border: '2px solid black', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white', cursor: 'pointer' }}>
               <Plus size={16} strokeWidth={3} />
             </div>
             <div style={{ background: '#06FBBE', border: '2px solid black', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '2px 2px 0 #000', cursor: 'pointer' }}>
               <Plus size={16} strokeWidth={3} />
             </div>
          </div>
        </div>

        <div style={{ padding: '0 16px 16px', position: 'relative', zIndex: 1, flex: 1, display: 'flex' }}>
          <div style={{ width: '100%', border: '2px dashed black', height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#FFFFFF', cursor: 'pointer' }}>
            <Plus size={24} strokeWidth={2} />
            <span style={{ fontSize: '12px' }}>排版版</span>
          </div>
        </div>
      </div>

      {/* Box 3 */}
      <div style={{ flex: 1, border: '2px solid black', background: '#FFFFFF', position: 'relative', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={dotBgStyle} />
        
        <div style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1, background: '#FFFFFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px' }}>
            <Moon size={18} />
            综合参考
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
             <div style={{ border: '2px solid black', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white', cursor: 'pointer' }}>
               <Plus size={16} strokeWidth={3} />
             </div>
             <div style={{ background: '#06FBBE', border: '2px solid black', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '2px 2px 0 #000', cursor: 'pointer' }}>
               <Plus size={16} strokeWidth={3} />
             </div>
          </div>
        </div>

        <div style={{ padding: '0 16px 16px', position: 'relative', zIndex: 1, display: 'flex', gap: '12px', flex: 1 }}>
          <div style={{ flex: 1, border: '2px dashed black', height: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#FFFFFF', cursor: 'pointer' }}>
            <Plus size={24} strokeWidth={2} />
            <span style={{ fontSize: '12px', textAlign: 'center', lineHeight: '1.4' }}>本地上传<br/>Word/PDF/图</span>
          </div>
          <div style={{ flex: 1, border: '2px dashed black', height: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#FFFFFF', cursor: 'pointer' }}>
            <div style={{ background: 'black', width: '20px', height: '20px' }} />
            <span style={{ fontSize: '12px' }}>灵感频</span>
          </div>
        </div>
      </div>

    </div>
  );
};
