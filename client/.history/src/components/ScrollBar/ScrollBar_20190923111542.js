/* eslint-disable no-return-assign */
import React, { useState, useEffect } from 'react';

import './ScrollBars.scss';

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
  const [xWidth, setXWidth] = useState(false); // x轴滚动条的宽度
  const [yHeight, setYHeight] = useState(false); // y轴滚动条的高度
  const [isScrolling, setIsScrolling] = useState(false); // 是否正在滚动

  let containerRef = null; // 外层容器的ref
  let contentRef = null; // 内容的ref

  // 初始化滚动条的展示和宽高
  const init = () => {
    const { offsetWidth: conWidth, offsetHeight: conHeight } = containerRef; // 获取容器的宽高
    const { offsetWidth: cWidth, offsetHeight: cHeight } = contentRef; // 获取内容的宽高
    // 内容的宽度大于容器的宽度，就开启横向滚动并计算x轴滚动条的宽度，否则就关闭横向滚动
    if (cWidth > conWidth) {
      setIsShowControlX(true);
      setXWidth(Math.pow(conWidth, 2) / cWidth);
    } else {
      setIsShowControlX(false);
    }
    // 内容的高度大于容器的高度，就开启纵向滚动并计算y轴滚动条的高度，否则就关闭纵向滚动
    if (cHeight > conHeight) {
      setIsShowControlY(true);
      setYHeight(Math.pow(conHeight, 2) / cHeight);
    } else {
      setIsShowControlY(false);
    }
  };

  /**
   * 每次组件的传参发生变化时，初始化状态
   */
  useEffect(() => {
    init();
  });

  return (
    <div className="ScrollBar" style={{ width, height }} ref={container => containerRef = container}>
      <div className="scroll-bar-content" ref={content => contentRef = content}>
        {children}
      </div>
      <div className={`scroll-bar-control ${autoHide ? 'autoHide' : ''} ${isScrolling ? 'active' : ''}`}>
        {
          mode !== 'y' && isShowControlX && <div className="scroll-bar-control-common scroll-bar-control-x" style={{ width: xWidth }} onClick={handleXClick}></div>
        }
        {
          mode !== 'x' && isShowControlY && <div className="scroll-bar-control-common scroll-bar-control-y" style={{ height: yHeight }} onClick={handleYClick}></div>
        }
      </div>
    </div>
  );
}

export default ScrollBar;