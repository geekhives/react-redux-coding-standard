import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SamleComponentPropsDistance extends Component {
    render() {
        const { user, data } = this.props;
        return (
            <div>
                <SampleComponent
                    user={ user }
                    data={ data }
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
)(SamleComponentPropsDistance);
