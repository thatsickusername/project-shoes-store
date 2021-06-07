import {useState} from 'react';
import '../css/ShoeList.css'
import ShoeCardSmall from './ShoeCardSmall';
import shoe1 from '../images/shoe1.jpg'
import shoe2 from '../images/shoe2.jpg'
import shoe3 from '../images/shoe3.jpg'
import shoe4 from '../images/shoe4.jpg'
import shoe5 from '../images/shoe5.jpg'
import shoe6 from '../images/shoe6.jpg'
import shoe7 from '../images/shoe7.jpg'
import shoe8 from '../images/shoe8.jpg'

function ShoeList() {

    const [productData, ] = useState([
        {
            img: shoe1,
            name: 'Nike 201',
            price: 200,
            id: 1
        },

        {
            img: shoe2,
            name: 'Jordans',
            price: 200,
            id: 2
        },

        {
            img: shoe3,
            name: 'Nike AirMax',
            price: 200,
            id: 3
        },
        {
            img: shoe4,
            name: 'PUMA relive',
            price: 200,
            id: 4
        },

        {
            img: shoe5,
            name: 'Summerville',
            price: 200,
            id: 5
        },

        {
            img: shoe6,
            name: 'Vans blue',
            price: 200,
            id: 6
        },
        
        {
            img: shoe7,
            name: 'Burogies',
            price: 200,
            id: 7
        },
        
        {
            img: shoe8,
            name: 'Supranos',
            price: 200,
            id: 8
        }

    ])


    return (
        <div className="ShoeList">
            <div className="SmallCardsContainer">
                {
                    productData.map( (product) => (
                        <ShoeCardSmall imgsrc={product.img} name={product.name} price={product.price} key={product.id} />
                    ))
                }
            </div>
        </div>
    );
}

export default ShoeList;