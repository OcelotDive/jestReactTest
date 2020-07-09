import React, { Component } from 'react';



class TestClass extends Component {
    constructor(props) {
        super(props)

        this.state = {};

        
    }

    getSnapshotBeforeUpdate() {
        return {foo: 1};
      }

    componentDidUpdate(preProps, preState, snap) {
     
    }
   

    componentDidMount() {
        console.log("component successfully mounted");
    }

    render() {
        return (
            <React.Fragment>
            <div className="test">Test class</div>
            </React.Fragment>
        )
    }
}

export default TestClass;