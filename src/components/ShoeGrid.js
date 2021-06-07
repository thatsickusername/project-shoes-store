import '../css/ShoeGrid.css'
import smolShoe from '../images/smolShoe.png'
import bigShoe from '../images/bigShoe.png'

function ShoeGrid() {
    return (

        <div class="shoeTileGrid">
            <div class="one">
                <div class="something">
                <h1>FLASHY <br/> NAME</h1>
                <img alt="something meaningfull" src={bigShoe}/>
                <h3>spring 2007 <br /> <span>Nike SubPro 205B</span></h3>
                </div>
            </div>
            <div class="two">
                <div class="smallShoe three"><img alt="something meaningfull" src={smolShoe}/><h3 class="hide">Nike SubPro 205B</h3></div>  
                <div class="smallShoe four"><img alt="something meaningfull" src={smolShoe}/><h3 class="hide">Nike SubPro 205B</h3></div>
                <div class="smallShoe five"><img alt="something meaningfull" src={smolShoe}/><h3 class="hide">Nike SubPro 205B</h3></div>
                <div class="smallShoe six"><img alt="something meaningfull" src={smolShoe}/><h3 class="hide">Nike SubPro 205B</h3></div>
                <div class="shoeQuote seven"><h1>Wear Your <span>Confidence</span></h1></div>
            </div>
        </div>

    );
}

export default ShoeGrid;