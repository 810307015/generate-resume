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
  const [xWidth, setXWidth] = useState(0); // x轴滚动条的宽度
  const [yHeight, setYHeight] = useState(0); // y轴滚动条的高度
  const [xLeft, setXLeft] = useState(0); // x轴滚动条距离左侧的偏移量
  const [yTop, setYTop] = useState(0); // y轴滚动条距离顶部的偏移量
  const [cLeft, setCLeft] = useState(0); // 内容距离左侧的偏移量
  const [cTop, setCTop] = useState(0); // 内容距离顶部的偏移量
  const [isScrollbarMove, setIsScrollbarMove] = useState(false); // 是否正在由鼠标拖动滚动条
  const [isScrolling, setIsScrolling] = useState(false); // 是否正在滚动

  let containerRef = null; // 外层容器的ref
  let contentRef = null; // 内容的ref

  // 处理鼠标在滚动条上按下时的事件
  const handleMouseDown = (e) => {
    console.log('移入', e);
    setIsScrollbarMove(true);
  }

  // 处理鼠标在滚动条上松开或离开滚动条时的事件
  const handleMouseUp = (e) => {
    console.log('移出', e);
    setIsScrollbarMove(false);
  }

  // 处理鼠标在滚动条上移动时的事件
  const handleMouseMove = (e) => {
    if (!isScrollbarMove) {
      return;
    }
    console.log('移动', e);
  }

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
      <div className="scroll-bar-content" ref={content => contentRef = content} style={{ transform: `translate(${cLeft}px, ${cTop}px)` }}>
        {children}
      </div>
      <div className={`scroll-bar-control ${autoHide ? 'autoHide' : ''} ${isScrolling ? 'active' : ''}`}>
        {
          mode !== 'y' && isShowControlX &&
          <div
            className="scroll-bar-control-common scroll-bar-control-x"
            style={{ width: xWidth, transform: `translateX(${xLeft}px)` }}
          />
        }
        {
          mode !== 'x' && isShowControlY &&
          <div
            className="scroll-bar-control-common scroll-bar-control-y"
            style={{ height: yHeight, transform: `translateY(${yTop}px)` }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseOut={handleMouseUp}
            onMouseMove={handleMouseMove}
          />
        }
      </div>
    </div>
  );
}

export default ScrollBar;