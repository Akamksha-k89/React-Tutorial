// MobxReactCounter.tsx
import React from 'react';
// import counter from '../state/CounterState';
import {observer,inject} from 'mobx-react';


interface CounterProps {
    counter?:counter
}

interface CounterState {
   
}

interface counter{
    value:number,
    incr:Function
};
//this.props is a keyword
// not for production
@inject("counter")
@observer
class MobxReactCounter extends React.Component<CounterProps, CounterState> {
    // ? optional
    // ! Nullable
    destroyFunc!: Function;

    constructor(props: CounterProps) {
        super(props); // MUST
        console.log('Counter obj created', props);
    }
 
    increment = () => {
        this.props.counter!.incr();
    }


    render() {
        console.log('MobxReactCounter render called');
        
        return (
            <div>
                <h4>MobxReactCounter Counter</h4>
               
                 <p> Counter {this.props.counter!.value} </p>
                
                <button onClick={this.increment}>
                    Incr
                </button> 

            </div>
        )
    }
}
//'

export default MobxReactCounter;