import React, { Component } from 'react';



class TestClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        };

        
    }

    getSnapshotBeforeUpdate() {
        return {foo: 1};
      }

    componentDidUpdate(preProps, preState, snap) {
     if(preState.count < 3) {
        this.setState(ps => ({count: ps.count + 1}))
     }
    }
   

    componentDidMount() {
        console.log("component successfully mounted");
    }

    render() {
        return (
            <React.Fragment>
            <div className="test">count:  {this.state.count}</div>
            </React.Fragment>
        )
    }
}

export default TestClass;