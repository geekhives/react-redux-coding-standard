import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SampleClassOnClick extends Component {

    handleOnClick = e => {
        e.preventDefault();
    }

    handleOnClickWithValue = data => e => {
        e.preventDefault();
        console.log(data) // 1
    }


    render() {
        return (
            <div>
                <a 
                    href="" 
                    onClick={this.handleOnClick}>

                </a>

                <a 
                    href="" 
                    onClick={this.handleOnClickWithValue(1)}>

                </a>
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
)(SampleClassOnClick);
