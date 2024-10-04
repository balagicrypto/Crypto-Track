import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext1 } from '../../context/CoinContext'
import { Link } from 'react-router-dom'



const Navbar = () => {

  const {setCurrency1} = useContext(CoinContext1)

  const currencyHandler = (e)=>{
    switch(e.target.value){
      case 'usd':{
        setCurrency1({name: "usd", symbol:"$"})
        break;
      }
      case 'eur':{
        setCurrency1({name: "eur", symbol:"€"})
        break;
      }
      case 'inr':{
        setCurrency1({name: "inr", symbol:"₹"})
        break;
      }
    default:{
        setCurrency1({name: "usd", symbol:"$"})
        break;
    }
    }
  }

  return (
    <div className='navbar'>
      <Link to={'/'}>
        <img src={logo} alt=''className='logo'/>
        </Link>
        <ul>
        <Link to={'/'}><li>Home</li></Link>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className='nav-right'>
            <select onChange={currencyHandler}> 
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>

            </select>
            <button>Sign up <img src={arrow_icon} alt="" /></button>
        </div>

    </div>
  )
}

export default Navbar