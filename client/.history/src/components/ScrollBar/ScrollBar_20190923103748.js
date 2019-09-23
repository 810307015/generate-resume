import React, { useState, useEffect } from 'react';

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
  const [isShowControlX, setIsShowControlX] = useState(false); // 是否需要显示x轴滚动条
  const [isShowControlY, setIsShowControlY] = useState(false); // 是否需要显示y轴滚动条

  const init = () => {

  };

  /**
   * 每次组件的传参发生变化时，初始化状态
   */
  useEffect(() => {
    init();
  });

  return (
    <div className="ScrollBar" style={{ width, height }}>
      <div className="scroll-bar-content" ref={content => this.content = content}>
        {children}
      </div>
      <div className={`scroll-bar-control ${autoHide ? 'autoHide' : ''}`}>
        {
          mode !== 'y' && isShowControlX && <div className="scroll-bar-control-common scroll-bar-control-x"></div>
        }
        {
          mode !== 'x' && isShowControlY && <div className="scroll-bar-control-common scroll-bar-control-y"></div>
        }
      </div>
    </div>
  );
}

export default ScrollBar;