import React from 'react';

interface Headerprops{
    title:string;
}
const Header = (props:Headerprops)=>{
    return (
        <div>
            <h1>Product {props.title}</h1>
            <hr/>
        </div>
    );
};

export default Header;