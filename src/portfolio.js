import React, {useState, useEffect} from 'react'
import Navigation from './Nav.js'

function Portfolio() {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem('crypto')) || "")

console.log(value)

    return (
        <div>
          <Navigation />
          <div className="tracker__names">
            <b>Coins</b>
            <b>Symbol</b>
            <b>Price</b>
            <b>Market Cap</b>
          </div>
          {value.map((crypto) => {
            return (
              <>
              <div className="tracker__main">
                <div className="tracker__img">
                    <img src={crypto.image} className="tracker__image"/>
                    <p>{crypto.id}</p>
                </div>
                <div className="tracker__symbol">
                    <p>{crypto.symbol}</p>
                </div>
                <div className="tracker__price">
                <p></p>
                    ${crypto.current_price}
                </div>
                <div className="tracker__market">
                <p></p>
                    ${crypto.market_cap}
                </div>
              </div>
              </>
            )
          })}
        </div>
    )
}

export default Portfolio
