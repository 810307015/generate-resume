import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'antd';

import * as exampleAction from 'Action/example';

const Counter = (props) => {
  const { exampleAction: { increment, decrement, testPromise, testNoType }, testData } = props;

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
    <div>
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