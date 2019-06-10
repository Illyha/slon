import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    state = {}
    render() {
        console.log('---Home props---', this.props);
        const {count} = this.props;
        return (
            <div>
                <h1>Home Page {count}</h1>
            </div>
        );
    }
}
const mapStateProps = (state) => {
    console.log('----redux store connect----', state);
    return {
        count: state.counter.counterStore
    };
}
export default connect(mapStateProps)(Home);
export default connect()(Home);
