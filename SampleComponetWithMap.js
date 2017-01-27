import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SampleComponetWithMap extends Component {

    static defaultProps = {
        data: []
    }

    render() {
        const { data } = this.props;
        return (
            <div>
                {
                    data.map(item => {
                        return (
                            <div 
                                key={`user-lists-${item.id}`}>

                            </div>
                        )
                    })
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
)(SampleComponetWithMap);
