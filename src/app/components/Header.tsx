import React from 'react';

interface Headerprops{
    App:string;
}
const Header = (props:Headerprops)=>{
    return (
        <div>
            <h1>Product {props.App}</h1>
            <hr/>
        </div>
    );
};

export default Header;