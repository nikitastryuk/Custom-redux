import React from 'react';
import PropTypes from 'prop-types';

const connect = (mapStateToProps, mapDispatchToProps) => {
  // It lets us inject component as the last step so we can use it as a decorator
  return function (WrappedComponent) {
    // Return a component
    return class extends React.Component {
      // Enabling this.context
      static contextTypes = {
        store: PropTypes.object.isRequired
      }
      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(this.context.store.getState(), this.props)}
            {...mapDispatchToProps(this.context.store.dispatch, this.props)}
          />
        )
      }
      componentDidMount() {
         // It remembers to subscribe to the store so it doesn't miss updates
        this.unsubscribe = this.context.store.subscribe(()=>this.forceUpdate());
      }
      componentWillUnmount() {
        // Unsubscribe
        this.unsubscribe();
      }
    }
  }
}

export default connect;