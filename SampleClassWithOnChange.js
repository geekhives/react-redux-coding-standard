import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import withOnChangeFunction from './withOnChangeFunction';

@withOnChangeFunction
class SampleClassWithOnChange extends Component {

    state = {
        name: ''
    }
    
    render() {

        return (
            <div>
                <input 
                    type="text" 
                    name="name"
                    onChange={this.handleOnChange}
                />

                <input 
                    type="text" 
                    name="firstname"
                    onChange={this.handleOnChange}
                />
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
)(SampleClassWithOnChange);
