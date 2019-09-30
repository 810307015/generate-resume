import React from "react";

import './CircleProgress.scss';

function CircleProgress(props) {
  const defaultProps = {
    stokeOuter: '#19bfbd', // 外圈的边框色
    strokeInner: "#ccc", // 内圈的边框色
    progress: 0, // 进度
    radius: 25, // 半径
    strokeWidth: 5 // 填充宽度
  };

  const realProps = { ...defaultProps, ...props };
  const { progress, radius, strokeInner, stokeOuter, strokeWidth } = realProps;
  const perimeter = radius * 2 * Math.PI;
  const progressLength = progress * perimeter;
  const size = (radius + strokeWidth) * 2;
  return (
    <div className="CircleProgress" style={{ width: size, height: size }}>
      <svg className="circle-box" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
        <circle
          className="inner"
          cx="50%"
          cy="50%"
          r={`${radius}px`}
          style={{
            fill: 'none',
            stroke: `${strokeInner}`,
            strokeWidth: `${strokeWidth}px`
          }}
        />
        <circle
          className="outer"
          cx="50%"
          cy="50%"
          r={`${radius}px`}
          style={{
            fill: 'none',
            strokeDasharray: `${progressLength} ${perimeter}`,
            strokeWidth: `${strokeWidth}px`,
            stroke: `${stokeOuter}`
          }}
        />
      </svg>
      <p className="progress">{(progress * 100).toFixed(1)}%</p>
    </div>
  );
}

export default CircleProgress;
