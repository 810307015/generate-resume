import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd';

import { increment, decrement } from 'Action/example';

const Counter = (props) => (
  <div>
    Counter: {props.count}
    <Button onClick={props.increment(111)}>+</Button>
    <Button onClick={props.decrement}>-</Button>
  </div>
)

Counter.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  const { count } = state.example;
  return {
    count
  }
}

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)