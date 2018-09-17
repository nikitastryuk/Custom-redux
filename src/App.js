import React from 'react';

import connect from './redux/connect';
import {increment, decrement, getCount, reset} from './store/counterActions';

class App extends React.Component {
    componentDidMount() {
        this.props.onGetCount();
    }
    render() {
        return (
            <div className="counter">
                <span className="count">{this.props.count}</span>
                <div className="buttons">
                    <button className="decrement" onClick={() => this.props.onDecrement(+this.refs.amount.value || 1)}>-</button>
                    <button className="reset" onClick={() => this.props.onReset()}>R</button>
                    <button className="increment" onClick={() => this.props.onIncrement(+this.refs.amount.value || 1)}>+</button>
                </div>
                <input type="text" ref="amount" defaultValue="1"/>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
      count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onGetCount: () => dispatch(getCount()),
      onIncrement: amount => dispatch(increment(amount)),  
      onDecrement: amount => dispatch(decrement(amount)),    
      onReset: () => dispatch(reset()),      
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);