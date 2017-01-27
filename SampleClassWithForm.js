import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SampleClassWithForm extends Component {

    handleSubmitForm = (e) => {
        e.preventDefault();

    }

    render() {
        //TODO: Refactor blah blah
        return (
            <form onSubmit={this.handleSubmitForm}>
                <input type="text"/>
            </form>
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
)(SampleClassWithForm);
