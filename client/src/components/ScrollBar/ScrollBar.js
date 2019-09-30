import React, { useState, useEffect, useRef } from 'react';

import { debounce } from 'Utils';

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
  const [startY, setStartY] = useState(false); // 起始的Y轴位置

  let containerRef = useRef(null); // 外层容器的ref
  let contentRef = useRef(null); // 内容的ref

  let currentWH = {}; // 当前容器和内容部分的宽高信息

  // 是否可以滚动滚动条，可以就滚动
  const isCanScroll = (deltaY) => {
    const { conHeight, ratio } = currentWH;
    const distanceMax = (conHeight - yHeight) - yTop;
    if(deltaY < 0 && yTop + deltaY < 0) {
      setYTop(0);
      setCTop(0);
      return;
    }
    if(distanceMax < deltaY) {
      setYTop(yTop + distanceMax);
      setCTop(cTop - (distanceMax / ratio));
      return;
    }
    setYTop(yTop + deltaY);
    setCTop(cTop - (deltaY / ratio));
  };

  // 滚轮事件
  const handleWheel = (e) => {
    e.persist();
    setIsScrolling(true);
    const deltaY = e.deltaY / 25;
    isCanScroll(deltaY);
  };

  // 开始拖动
  const handleDragStart = (e) => {
    setStartY(e.clientY);
    setIsScrolling(true);
  };

  // 拖动中
  const handleDrag = (e) => {
    e.persist();
    debounce(() => {
      const deltaY = (e.clientY - startY)/4;
      isCanScroll(deltaY);
    }, 50)();
  };

  // 拖动结束
  const handleDragEnd = (e) => {
    e.persist();
    setIsScrolling(false);
    debounce(() => {
      const deltaY = (e.clientY - startY)/4;
      isCanScroll(deltaY);
    }, 50)();
  };

  // 初始化滚动条的展示和宽高
  const init = () => {
    const { offsetWidth: conWidth, offsetHeight: conHeight } = containerRef.current; // 获取容器的宽高
    const { offsetWidth: cWidth, offsetHeight: cHeight } = contentRef.current; // 获取内容的宽高
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
    // 将当前计算值存入外部变量，方便事件监听时可以继续使用
    currentWH = {
      conWidth,
      conHeight,
      cWidth,
      cHeight,
      ratio: conHeight / cHeight
    }
  };

  /**
   * 每次组件的传参发生变化时，初始化状态
   */
  useEffect(() => {
    init();
    setIsScrolling(false);
  });

  return (
    <div className="ScrollBar" style={{ width, height }} ref={containerRef} onWheel={handleWheel}>
      <div className="scroll-bar-content" ref={contentRef} style={{ transform: `translate(${cLeft}px, ${cTop}px)` }}>
        {children}
      </div>
      <div className={`scroll-bar-control ${autoHide ? 'autoHide' : ''} ${isScrolling ? 'active' : ''}`}>
        {
          mode !== 'y' && isShowControlX &&
          <div className="scroll-bar-control-container scroll-bar-control-container-x" style={{ width }}>
            <div
              className="scroll-bar-control-common scroll-bar-control-x"
              style={{ width: xWidth, transform: `translateX(${xLeft}px)` }}
            />
          </div>
        }
        {
          mode !== 'x' && isShowControlY &&
          <div className="scroll-bar-control-container scroll-bar-control-container-y" style={{ height }}>
            <div
              className="scroll-bar-control-common scroll-bar-control-y"
              style={{ height: yHeight, transform: `translateY(${yTop}px)` }}
              draggable
              onDrag={handleDrag}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            />
          </div>
        }
      </div>
    </div>
  );
}

export default ScrollBar;