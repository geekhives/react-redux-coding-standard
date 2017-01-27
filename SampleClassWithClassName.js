import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SampleClassWithClassName extends Component {
    render() {
        return (
            <div className="classnamesample">
            
            </div>
        );
    }
}

export default connect(
    state => {

        return {

        }
    },
    {
        ...actions
    }
)(SampleClassWithClassName);
