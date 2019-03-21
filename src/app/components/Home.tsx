import React, { Component } from 'react';
import Counter from './Counter';
class Home extends Component{

    render(){
        return (<div>
            <h1>Home</h1>
            <Counter startValue = {0} />
        </div>);
    }
}

export default Home;