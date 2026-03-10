import React from 'react';
import { Star, ChevronDown, AlignLeft } from 'lucide-react';

export const MainContent = () => {
  return (
    <div className="panel-active" style={{ flex: 1, minWidth: '400px', display: 'flex', flexDirection: 'column', padding: '32px 24px', gap: '24px', position: 'relative' }}>
      
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '28px' }}>
            <Star size={28} strokeWidth={2} />
            综合情报书
          </div>
          <div style={{ color: '#888', fontSize: '14px', marginTop: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ccc' }} />
            光流 AI 搜索
          </div>
        </div>
        <div style={{ background: '#06FBBE', border: '2px solid black', borderRadius: '999px', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', boxShadow: '2px 2px 0 #000' }}>
          2
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button className="pixel-btn" style={{ borderRadius: '999px', padding: '10px 24px', fontSize: '16px' }}>
          一键发送至画布
        </button>
      </div>

      <div style={{ borderBottom: '2px solid black', margin: '8px 0' }} />

      {/* Banner */}
      <div style={{ background: 'var(--pale-green)', border: '2px solid black', padding: '14px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', boxShadow: '2px 2px 0 #000', fontSize: '16px' }}>
        <AlignLeft size={20} strokeWidth={2} />
        文重策划 (PPT文案工作台)
      </div>

      {/* Info section */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '18px', marginBottom: '12px' }}>
          <div style={{ width: '12px', height: '12px', background: '#06FBBE', border: '2px solid black' }} />
          综合情报书
        </div>
        <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
          上传背景品片点，打开「文案策略」工作室会自行生成。
        </div>
      </div>

      {/* Section 01 */}
      <div>
        <div style={{ borderLeft: '4px solid #06FBBE', paddingLeft: '10px', fontSize: '22px', marginBottom: '20px' }}>
          01. 内容策略 (CONTEXT)
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', fontSize: '14px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'transparent', border: '2px solid black' }} />
            索引接续 (Context)
          </div>
          <div style={{ border: '2px solid black', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#EBE5D0', boxShadow: '2px 2px 0 #000', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '16px' }}>
              <div style={{ width: '12px', height: '12px', background: 'black' }} />
              通用大睛 (Standard)
            </div>
            <ChevronDown size={24} strokeWidth={2} />
          </div>
        </div>

        <div style={{ marginBottom: '10px', fontSize: '14px' }}>主词大间 (Topic)</div>
        <div style={{ border: '2px solid black', padding: '16px', background: '#EBE5D0', minHeight: '100px', fontSize: '16px', boxShadow: '2px 2px 0 #000' }}>
          在吐输入缩内派示来来越文本，成定石到上件产品天行暴立城。
        </div>
        <div style={{ color: '#06FBBE', fontSize: '12px', marginTop: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '14px', filter: 'hue-rotate(90deg)' }}>💡</span> 平面挂绘译文本单作，可用能在白向画用一些支藏
        </div>
      </div>

      <div style={{ borderBottom: '2px dashed black', margin: '16px 0' }} />

      {/* Section Visual Settings */}
      <div>
        <div style={{ borderLeft: '4px solid #06FBBE', paddingLeft: '10px', fontSize: '22px', marginBottom: '24px' }}>
          视觉参数配置 (VISUAL SETTINGS)
        </div>
        
        <div style={{ display: 'flex', gap: '60px', marginBottom: '30px' }}>
          <div>
            <div style={{ marginBottom: '12px', fontSize: '14px' }}>生面比例</div>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['16:9', '4:3', '3:2', '1:1'].map((ratio, i) => (
                <div key={ratio} style={{ border: '2px solid black', padding: '6px 12px', background: i === 0 ? '#06FBBE' : 'transparent', boxShadow: i === 0 ? '2px 2px 0 #000' : 'none', cursor: 'pointer', fontSize: '14px' }}>
                  {ratio}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ marginBottom: '12px', fontSize: '14px' }}>分辨率设置</div>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['1K', '2K', '4K'].map((res) => (
                <div key={res} style={{ border: '2px solid black', padding: '6px 16px', cursor: 'pointer', fontSize: '14px', background: 'transparent' }}>
                  {res}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '14px' }}>
            <span>创意率:</span>
            <span>50%</span>
          </div>
          <div style={{ position: 'relative', height: '4px', background: 'black', display: 'flex', alignItems: 'center' }}>
            <div style={{ position: 'absolute', left: '50%', width: '20px', height: '20px', background: 'white', border: '2px solid black', borderRadius: '50%', transform: 'translateX(-50%)', boxShadow: '2px 2px 0 #000', cursor: 'pointer' }} />
          </div>
        </div>
      </div>

      <div style={{ marginTop: 'auto', paddingTop: '30px' }}>
        <button className="pixel-btn" style={{ width: '100%', borderRadius: '999px', padding: '16px', fontSize: '20px' }}>
          一键发送至画布
        </button>
      </div>

    </div>
  );
};
