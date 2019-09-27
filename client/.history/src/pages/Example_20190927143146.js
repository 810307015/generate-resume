import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'antd';

import { increment, decrement } from 'Action/example';

const Counter = (props) => (
  <div>
    Counter: {props.count}
    <Button onClick={() => props.increment(111)}>+</Button>
    <Button onClick={() => props.decrement(100)}>-</Button>
  </div>
)

Counter.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  console.log(state);
  const { count } = state.example;
  return {
    count
  }
}

const mapDispatchToProps = dispatch => ({
  increment: bindActionCreators(increment, dispatch),
  decrement: bindActionCreators(decrement, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)