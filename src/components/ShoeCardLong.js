import '../css/ShoeCardLong.css'

function ShoeCardLong(props) {
    return (
        <div className="ShoeCardLong">
            <img alt="very meaningfull" className="cartImage" src={props.imgsrc}/>
            <div className="cartText">
                <h2>{props.name}</h2>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quae.
                </h5>
            </div>
            <div className="cartButtons"></div>
            <div className="cartPrice">
                <h2> ${props.price}</h2>
            </div>
        </div>
    );
}

export default ShoeCardLong;