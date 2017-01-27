import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


const ComponentOne = ({ }) => {

    return (

    )
}

const ComponentTwo = ({ }) => {
    return (
        
    )
}

class SampleChildComponentConditions extends Component {
    render() {
        const { isTrue } = this.props;

        //assuming na madaming elements
        return (
            <div>
                { isTrue
                    ? <ComponentOne/>
                    : <ComponentTwo/>
                }
            </div>
        );
    }
}

export default connect(
    state => {

        return {

        }
    },
    actions
)(SampleChildComponentConditions);