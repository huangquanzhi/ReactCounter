import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as indexAction from '../actions/index';

const propTypes = {
    counter: PropTypes.object,
    actions: PropTypes.object,
};

class AppContainer extends Component {
    render() {
        const { counter, actions } = this.props;

        const onIncrease = () => {
            actions.increaseCounter();
        };
        const onDecrease = () => {
            actions.decreaseCounter();
        };

        return (
            <div className="container">
                <h1>{ counter.count }</h1>
                <button onClick={ onIncrease }> +</button>
                <button onClick={ onDecrease }> -</button>
            </div>
        )
    }
}

AppContainer.propTypes = propTypes;

function mapStateToProps(state) {
    return {
        counter: state.counter,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(indexAction, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
