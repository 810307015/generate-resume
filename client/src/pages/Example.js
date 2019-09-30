import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Upload, message, Icon } from 'antd';

import * as exampleAction from 'Action/example';
import CircleProgress from 'Components/CircleProgress/CircleProgress';
import ScrollBar from 'Components/ScrollBar/ScrollBar';
import Img from 'Components/Img/Img';
import config from '@/config';

const Counter = (props) => {
  const { exampleAction: { increment, decrement, testPromise, testNoType, testPostData }, testData } = props;

  const [progress, setProgress] = useState(0);
  const [imageList, setImageList] = useState([]);

  const handlePromise = () => {
    testPromise({}, (res) => {
      console.log('请求成功', res);
    })
  };

  const handleNoTypePromise = () => {
    testNoType({}, (res) => {
      console.log('请求成功', res);
    });
  };

  const uploadProps = {
    name: 'file',
    action: '/api/upload',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        // console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        // console.log(info.file);
        message.success(`${info.file.name} file uploaded successfully`);
        setImageList([...imageList, {
          src: config.baseUrl + info.file.response.data,
          name: info.file.name
        }]);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const postData = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    testPostData(data, (res) => {
      console.log(res);
    });
  }

  return (
    <div onClick={() => setProgress(progress + 0.1)} >

      Counter: {props.count}
      <Button onClick={() => increment(111)}>+</Button>
      <Button onClick={() => decrement(100)}>-</Button>
      <Button onClick={handlePromise}>发请求</Button>
      <Button onClick={handleNoTypePromise}>发请求（不走reducer）</Button>
      {
        testData.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }
      query.id: {props.query.id}
      <CircleProgress progress={progress} />
      <Button onClick={postData}>发送post请求</Button>
      <Upload {...uploadProps}>
        <Button>
          <Icon type="upload" /> Click to Upload
        </Button>
      </Upload>
      {
        imageList.map(img => {
          return <Img key={img.name} src={img.src} isOpenPreview={true} width={300} height={300} />
        })
      }
      <ScrollBar>
        <p>1232142142132132132132132132131</p>
        <p>123214214213213213213213213213</p>
        <p>qwqwe</p>
        <p>wqe</p>
        <p>123214214213213213213213213213</p>
        <p>123214214213213213213213213213</p>
        <p>123214214213213213213213213213</p>
        <p>123214214213213213213213213213</p>
        <p>123214214213213213213213213213</p>
        <p>123214214213213213213213213213</p>
        <p>123214214213213213213213213213</p>
        <p>123214214213213213213213213213</p>
        <p>123214214213213213213213213213</p>
        <p>123214214213213213213213213213</p>
        <p>wqe</p>
        <p>123214214213213213213213213213</p>
        <p>123214214213213213213213213213</p>
        <p>123214214213213213213213213213</p>
        <p>123214214213213213213213213213</p>
        <p>123214214213213213213213213213</p>
        <p>wqe</p>
        <p>123214214213213213213213213213</p>
        <p>wqe</p>
        <p>123214214213213213213213213213</p>
        <p>123214214213213213213213213213</p>
        <p>123214214213213213213213213213</p>
        <p>123214214213213213213213213213</p>
        <p>123214214213213213213213213213</p>
        <p>123214214213213213213213213213</p>
        <p>123214214213213213213213213213</p>
        <p>123214214213213213213213213213</p>
        <p>123214214213213213213213213213</p>
        <p>gfdg</p>
        <p>123214214213213213213213213213</p>
        <p>123214214213213213213213213213</p>
        <p>dsf</p>
      </ScrollBar> 
    </div>
  )
};

const mapStateToProps = state => {
  const { count, testData } = state.example;
  return {
    count,
    testData
  }
}

const mapDispatchToProps = dispatch => ({
  exampleAction: bindActionCreators(exampleAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)