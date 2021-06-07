import {useState} from 'react';
import '../css/ShoeList.css'
import ShoeCardSmall from './ShoeCardSmall';

function ShoeList() {

    const [productData, ] = useState([
        {
            name: 'black box 1',
            price: '$200',
            id: 1
        },

        {
            name: 'black box 2',
            price: '$200',
            id: 2
        },

        {
            name: 'black box 3',
            price: '$200',
            id: 3
        },

        {
            name: 'black box 4',
            price: '$200',
            id: 4
        },

        {
            name: 'black box 5',
            price: '$200',
            id: 5
        },

        {
            name: 'black box 6',
            price: '$200',
            id: 6
        },
        
        {
            name: 'black box 7',
            price: '$200',
            id: 7
        },
        
        {
            name: 'black box 8',
            price: '$200',
            id: 8
        }

    ])


    return (
        <div className="ShoeList">
            <div className="SmallCardsContainer">
                {
                    productData.map( (product) => (
                        <ShoeCardSmall name={product.name} price={product.price} key={product.id} />
                    ))
                }
            </div>
        </div>
    );
}

export default ShoeList;