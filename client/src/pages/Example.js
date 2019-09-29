import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'antd';

import * as exampleAction from 'Action/example';
import CircleProgress from 'Components/CircleProgress/CircleProgress';

const Counter = (props) => {
  const { exampleAction: { increment, decrement, testPromise, testNoType }, testData } = props;

  const [progress, setProgress] = useState(0);

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