// Header.tsx
import React from 'react';

interface HeaderProps {
    title: string;
}

import {NavLink} from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import Cart from './Cart';
 
// SFC Stateless Functional component

// ES6 style
// functional component
// props are passed as function argument
const Header: React.SFC<HeaderProps> = inject("cart", 'counter') (observer((props) => {
    // props are immutable
    // error props.title = 'test'; 
    return (
        <div>
            <h2>{props.title}</h2>

            <NavLink to="/" className="button"
                            activeClassName="success"
            >
                Home
            </NavLink>

            <NavLink to="/products" className="button"
                            activeClassName="success"
            >
                Products
            </NavLink>

            <NavLink to="/cart" className="button"
                            activeClassName="success"
            >
                Cart
            </NavLink>


            <NavLink to="/mobx-cart" className="button"
                            activeClassName="success"
            >
                Mobx Cart
            </NavLink>
            <NavLink to="/mobxCount" className="button"
                            activeClassName="success"
            >
                Mobx Counter
            </NavLink>
            <NavLink to="/MobxReactCounter" className="button"
                            activeClassName="success"
            >
                Mobx React Counter
            </NavLink>
            
            <NavLink to="/mobx-cart" className="button"
                            activeClassName="success"
            >
                Mobx Cart [{props.cart!.amount}]
            </NavLink>


            <NavLink to="/checkout" className="button"
                            activeClassName="success"
            >
                Checkout
            </NavLink>


            <NavLink to="/about" className="button"
                            activeClassName="success"
            >
                About
            </NavLink>


            <NavLink to="/counter" className="button"
                            activeClassName="success"
            >
                Counter
            </NavLink>



            <hr />
        </div>
    )
}
))

export default Header;