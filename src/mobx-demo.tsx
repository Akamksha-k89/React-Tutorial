import {observable,autorun} from 'mobx';
const person = observable({
    name:"jack",
    age:30
});

//first time
//subscriber
//it keeps on looking for changes
autorun(function(){
    console.log("person name " + person.name + " " + person.age);
});

person.name = "hi !!! Jack";
person.name = "second time";
person.age =90; //didnt invoke the autorun again ; as it was not looking for age changes

const calculator = observable({
    a:0,
    b:0
});

const destroy = autorun(() => {
 
    const c = calculator.a + calculator.b;
    console.log( " sum is " + c + "for person  " + person.name);
});

calculator.a =300;
calculator.b =90;

// setInterval = () =>{

// }