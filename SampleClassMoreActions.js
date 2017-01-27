import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as otheractions from '../actions/otheractions';

class SampleClassActions extends Component {
    render() {
        return (
            <div>
            
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
        ...actions,
        ...otheractions
    }
)(SampleClass);