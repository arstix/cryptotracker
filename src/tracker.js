import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './tracker.css'
import Navigation from './Nav.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Tracker() {
  const [data, setData] = useState([])
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    setInterval(() => {
      const fetchData = async () => {
        const result = await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false' , { method: 'GET', mode:'no-cors'})
        setData(result.data)
      }
      fetchData()
    }, 1000)
  }, [])


    return (
        <div>
        <Navigation />
        <h2>Click the coin button to add to Portfolio</h2>
        <p>New functionalities coming</p>
          <div className="tracker__names">
            <b>Coins</b>
            <b>Symbol</b>
            <b>Price</b>
            <b>Market Cap</b>
          </div>
            {data.map((coins, i) => {
              const addToPortfolio = () => {
                setPortfolio([...portfolio, data[i]])
                  localStorage.setItem('crypto', JSON.stringify([...portfolio, data[i]]))
              }


                return (
                  <>
                  <div className="tracker__main">
                    <div className="tracker__img">
                        <img src={coins.image} className="tracker__image"/>
                      <button key={i} onClick={addToPortfolio}>{coins.id}</button>
                    </div>
                    <div className="tracker__symbol">
                        <p>{coins.symbol}</p>
                    </div>
                    <div className="tracker__price">
                    <p></p>
                        ${coins.current_price}
                    </div>
                    <div className="tracker__market">
                    <p></p>
                        ${coins.market_cap}
                    </div>
                  </div>
                  </>
                )
            })}
        </div>
    )
}

export default Tracker
