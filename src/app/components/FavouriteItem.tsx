// FavouriteItem.tsx
import React from 'react';
import { FavouriteItem as FavouriteItemModel } from '../models/FavouriteItem';

interface FavouriteItemProps {
    item: FavouriteItemModel;
    removeItem: Function;
}

interface FavouriteItemState {
}

class FavouriteItem extends React.Component<FavouriteItemProps, FavouriteItemState> {
    constructor(props: FavouriteItemProps) {
        super(props);
    }

    // incrementQty = () => {
    //     //this.props.updateItem(this.props.item.id, this.props.item.qty + 1);
    //     const {id, qty} = this.props.item;
    //     this.props.updateItem(id,  qty + 1);
    // }

    // decrementQty = () => {
    //     //this.props.updateItem(this.props.item.id, this.props.item.qty + 1);
    //     const {id, qty} = this.props.item;
    //     this.props.updateItem(id,  qty - 1);
    // }

  


    render() {
        // deconstruct
        const {item, 
               removeItem } = this.props;

        console.log('FavouriteItem Render ', item.id);
        return (
            <tr>
                <td>{item.name}</td>
               
                <td>
                        <button onClick={ () => removeItem(item.id) }>
                            X
                        </button> 

                      
                    </td> 
            </tr>
        )
    }
}

export default FavouriteItem;