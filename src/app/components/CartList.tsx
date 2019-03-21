// CartList.tsx

import React from 'react';
import { CartItem } from '../models/CartItem';
// TODO: import CartItem component
// default imports are alias
import CartItemComp from './CartItem';

interface CartListProps {
    items: CartItem[],
    removeItem: Function,
    updateItem: Function
}

interface CartListState {
}

class CartList extends React.Component<CartListProps> {
    constructor(props: CartListProps) {
        super(props);
    }

    render() {
        console.log('CartList render');

        const {items, 
                updateItem,
                removeItem } = this.props;

        return (
            <div>
                <h2> Cart List </h2>
                {/* todo */}
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Ops</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            items.map ( (item, index) => (
                                <CartItemComp item={item} 
                                              key={item.id}
                                             
                                              removeItem={removeItem}
                                              updateItem={updateItem}
                                              
                                              />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CartList;