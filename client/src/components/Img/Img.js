import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';

import './Img.scss';

function Img(props) {
  const defaultProps = {
    isOpenPreview: false, // 图片是否开启预览
    width: 300, // 图片的宽度
    height: 300, // 图片的高度
    src: '', // 图片的地址
    custom: null, // 自定义的内容，比如图片的文字说明之类的
  };

  const realProps = { ...defaultProps, ...props };
  const { isOpenPreview, width, height, src } = realProps;

  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  const preloadImg = () => {
    const image = new Image();
    image.src = src;
    image.onload = function() {
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    const { onClick } = realProps;
    onClick && onClick();
    setVisible(!visible);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  useEffect(() => {
    preloadImg();
  });

  return (
    <div className="Img">
      {
        !isLoading &&
        <div className="Img-img" style={{ backgroundImage: `url(${src})`, width, height }} onClick={handleClick} />
      }
      {
        isOpenPreview &&
        <Modal
          title="图片预览"
          visible={visible}
          footer={null}
          onCancel={handleCancel}
        >
          <div className="Img-img" style={{ backgroundImage: `url(${src})` }} />
        </Modal>
      }
    </div>
  );
}

export default Img;