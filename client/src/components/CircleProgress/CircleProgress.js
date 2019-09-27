import React, { useState, useEffect } from 'react';

import './CircleProgress.scss';

function CircleProgress(props) {
  const defaultProps = {
    bigRadius: 100, // 圆环的外半径
    loopWidth: 10, // 环的宽度
    fontSize: 14, // 圆环内文字的字体大小
    fontColor: '#333', // 圆环内的字体颜色
    fillColor: 'yellow', // 圆环填充的颜色
    bgColor: '#ccc', // 圆环底部的颜色
    ratio: 0 // 当前百分比
  };

  const realProps = { ...defaultProps, ...props };
  const { bigRadius, loopWidth, fontSize, fillColor, bgColor, ratio, fontColor } = realProps;
  const halfBigRadius = bigRadius / 2;

  const [percent, setPercent] = useState(ratio);
  const [leftRotate, setLeftRotate] = useState(0);
  const [rightRotate, setRightRotate] = useState(0);
  const [isTop, setIsTop] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  const commonStyle = {
    width: halfBigRadius, 
    height: bigRadius
  };

  const leftCommonStyle = {
    borderRadius: `${halfBigRadius}px 0 0 ${halfBigRadius}px`, 
    borderWidth: `${loopWidth}px 0 ${loopWidth}px ${loopWidth}px`,
    ...commonStyle
  };

  const rightCommonStyle = {
    borderRadius: `0 ${halfBigRadius}px ${halfBigRadius}px 0`, 
    borderWidth: `${loopWidth}px ${loopWidth}px ${loopWidth}px 0`,
    ...commonStyle
  };

  const caculateRatio = () => {
    const ratio = props.ratio;
    setPercent(ratio);
    if(ratio < 0 || ratio > 100) {
      return;
    }
    if(ratio <= 50) {
      const deg = ratio / 100 * 360;
      setLeftRotate(deg);
    } else {
      const deg = (ratio - 50) / 100 * 360;
      setIsTop(true);
      setIsBottom(true);
      setRightRotate(deg);
    }
  };

  useEffect(() => {
    caculateRatio();
  });

  return (
    <div className="CircleProgress">
      <div className="progress-circle" style={{ width: bigRadius, height: bigRadius, lineHeight: `${bigRadius}px` }}>
        <div className="progress-fill">
          <div 
            className={`before ${isTop ? 'isTop' : ''}`} 
            style={{ 
              ...leftCommonStyle,
              borderColor: fillColor 
            }}
          />
          <div
            className="after"
            style={{ 
              ...rightCommonStyle,
              borderColor: fillColor 
            }}
          />
        </div>
        <div className="progress-bg">
          <div
            className={`before ${isBottom ? 'isBottom' : ''}`} 
            style={{ 
              ...leftCommonStyle,
              transform: `rotateZ(${leftRotate}deg)`,
              borderColor: bgColor 
            }}
          />
          <div 
            className="after"
            style={{
              ...rightCommonStyle,
              transform: `rotateZ(${rightRotate}deg)`,
              borderColor: bgColor 
            }}
          />
        </div>
        <span className="progress-percent" style={{ fontSize, fontColor }}>
          { percent + '%' }
        </span>
      </div>
    </div>
  );
}

export default CircleProgress;