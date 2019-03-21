// FavouriteList.tsx

import React from 'react';
import { FavouriteItem } from '../models/FavouriteItem';
// TODO: import FavouriteItem component
// default imports are alias
import FavouriteItemComp from './FavouriteItem';

interface FavouriteListProps {
    // items: FavouriteItem[],
    // removeItem: Function,
    // updateItem: Function
}



interface FavouriteListState {
    items: FavouriteItem[],
}

class FavouriteList extends React.Component<FavouriteListProps,FavouriteListState> {
    constructor(props: FavouriteListProps) {
        super(props);
       this.state={
           items:[
               {id:1,name:"sauce"},
               {id:2,name:"react"},
               {id:3,name:"node"}
           ]
       };
    }

    removeItem = (id: number) => {
        const items = this.state.items.filter(item => item.id !== id);
        this.setState({
            items
        })
     }
 
     updateItem = (id: number, qty: number) => {
         //TODO
         // clone the list
         // clone the item that needs an update
         const items = this.state.items.map (item => {
             if (item.id !== id) {
                 return item;
             }
 
             // clone, the qty to be changed
             return {...item, qty}
         });
 
         this.setState({
             items
         })
     }
 

    render() {
        console.log('FavouriteList render');

        const {items} = this.state;

        return (
            <div>

{/* <h2>Cart</h2>

{/* 
    pass this as props is bad
    passing complete state as props is bad
    pass needed properties -- good
*/}

{/* <button onClick={this.addItem}>
    Add Item
</button>

<button onClick={this.empty}>
    Empty Cart
</button> */} */}

                <h2> Favourite List </h2>
                {/* todo */}
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>RemoveItem</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            items.map ( (item, index) => (
                                <FavouriteItemComp item={item} 
                                              key={item.id}
                                              removeItem={this.removeItem}
                                              />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default FavouriteList;