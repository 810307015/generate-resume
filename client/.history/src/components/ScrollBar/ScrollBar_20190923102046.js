import React from 'react';

function ScrollBar(props) {
  const defaultProps = {
    width: '100%', // 如果是有横向滚动，则宽度必传
    height: '500px', // ScrollBar的高度
    mode: 'y', // 滚动模式，x为横轴，y为纵轴，both为双向滚动
    autoHide: true, // 自动隐藏滚动条，只在滚动或hover在滚动条上时显示
    children: null // ScrollBar中的内容
  };
  const realProps = { ...defaultProps, ...props };
  const { width, height, mode, autoHide, children } = realProps;

  return (
    <div className="ScrollBar" style={{ width, height }}>
      <div className="scroll-bar-content">
        {children}
      </div>
      <div className={`scroll-bar-control ${autoHide ? 'autoHide' : ''}`}>
        {
          mode !== 'y' && <div className="scroll-bar-control-common scroll-bar-control-x"></div>
        }
        {
          mode !== 'x' && <div className="scroll-bar-control-common scroll-bar-control-y"></div>
        }
      </div>
    </div>
  );
}

export default ScrollBar;