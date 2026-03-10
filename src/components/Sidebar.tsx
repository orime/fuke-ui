import React from 'react';
import { Settings, Image as ImageIcon, Video, Box, Crosshair, Hexagon, TerminalSquare, X, Edit3, Shield, Monitor } from 'lucide-react';

export const Sidebar = () => {
  return (
    <div style={{ width: '220px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '16px', height: '100%', paddingRight: '16px' }}>
      
      {/* Top box */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ border: '2px solid black', padding: '10px', display: 'flex', alignItems: 'center', gap: '10px', background: '#EBE5D0' }}>
          <div style={{ width: '24px', height: '24px', background: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#06FBBE', fontSize: '10px', fontFamily: 'monospace', transform: 'scale(0.8)' }}>M/C</span>
          </div>
          <span style={{ fontSize: '20px' }}>光流 AI</span>
        </div>

        <div style={{ background: '#06FBBE', border: '2px solid black', padding: '6px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px' }}>
          <div style={{display:'flex', alignItems:'center', gap: '4px'}}><Shield size={14} strokeWidth={2} /> 993288.0</div>
          <span>交通</span>
        </div>

        <div style={{ border: '2px solid black', padding: '6px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '10px', background: 'white' }}>
          <span>1476858382@qq.com</span>
          <span style={{ border: '1px solid black', padding: '1px 4px' }}>连播</span>
        </div>
        
        <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '4px', display:'flex', alignItems:'center', justifyContent:'center', gap: '4px' }}>
           <Monitor size={14} /> Admin Dashboard
        </div>
      </div>

      <div style={{ borderBottom: '2px solid black', margin: '4px 0' }} />

      {/* Menu items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
        <div style={{ padding: '8px 10px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', cursor: 'pointer' }}>
          <Edit3 size={18} strokeWidth={2} />
          1. 自由绘画
        </div>
        <div style={{ background: '#06FBBE', border: '2px solid black', padding: '8px 10px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', cursor: 'pointer', boxShadow: '2px 2px 0 #000' }}>
          <Hexagon size={18} strokeWidth={2} />
          2. AI PPT
        </div>
        <div style={{ padding: '8px 10px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', cursor: 'pointer' }}>
          <Monitor size={18} strokeWidth={2} />
          3. AI 详频续
        </div>
        <div style={{ padding: '8px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '14px', cursor: 'pointer' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Video size={18} strokeWidth={2} />
            4. AI 视频带货
          </div>
          <div style={{ background: '#666', color: 'white', fontSize: '10px', padding: '2px 6px', borderRadius: '99px' }}>2</div>
        </div>
        <div style={{ padding: '8px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '14px', cursor: 'pointer' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <ImageIcon size={18} strokeWidth={2} />
            5. AI 海报
          </div>
          <div style={{ background: '#666', color: 'white', fontSize: '10px', padding: '2px 6px', borderRadius: '99px' }}>305</div>
        </div>
        <div style={{ padding: '8px 10px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', cursor: 'pointer' }}>
          <Crosshair size={18} strokeWidth={2} />
          6. AI 海影
        </div>
        <div style={{ padding: '8px 10px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', cursor: 'pointer' }}>
          <Box size={18} strokeWidth={2} />
          7. 强度反映
        </div>
        <div style={{ padding: '8px 10px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', cursor: 'pointer' }}>
          <TerminalSquare size={18} strokeWidth={2} />
          8. 快捷操作
        </div>
        <div style={{ padding: '8px 10px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', cursor: 'pointer' }}>
          <Settings size={18} strokeWidth={2} />
          9. 设置
        </div>
      </div>

      {/* System Notice */}
      <div style={{ background: '#06FBBE', border: '2px solid black', padding: '12px', position: 'relative', boxShadow: '2px 2px 0 #000' }}>
        <X size={16} strokeWidth={3} style={{ position: 'absolute', top: '8px', right: '8px', cursor: 'pointer' }} />
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
          <div style={{ background: 'black', color: 'white', width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', marginTop: '2px' }}>!</div>
          <div style={{ fontSize: '14px' }}>系统公告 (System Notice)</div>
        </div>
        <div style={{ fontSize: '10px', lineHeight: '1.5' }}>
          光流 AI 模块能力紧急更新公告: 1 日接触现在不支持重新同化。 随机的保存了至 3. Sora 2.4 版本更新时间由于部分参数调优，相对时对其其他模型，系 Seedance 2.0 上线，第一个问题题。
        </div>
        <div style={{ textAlign: 'right', fontSize: '10px', marginTop: '8px' }}>2020/3/10</div>
      </div>
    </div>
  );
};
