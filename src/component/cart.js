import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BsCurrencyRupee } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FaBagShopping } from "react-icons/fa6";
import './Cart.css';

const Cart = ({ cart, setCart }) => {
  
  //Increase quantity of cart product
  const incqty = (product) => 
  {
    const exist= cart.find((x) =>
    {
     return x.id === product.id 
    })
    setCart(cart.map((curElm) =>
    {
      return curElm.id === product.id ? {...exist, qty: exist.qty + 1} : curElm
    }))
  }
  // Decrease quantity of cart product
  const decqty = (product) => 
  {
    const exist= cart.find((x) =>
    {
     return x.id === product.id 
    })
    setCart(cart.map((curElm) =>
    {
      return curElm.id === product.id ? {...exist, qty: exist.qty - 1} : curElm
    }))
  }

  //Removing cart product
  const removeproduct = (product) => 
  {
    const exist = cart.find((x) => 
    {
      return x.id === product.id
    })
    if(exist.qty > 0)
    {
      setCart(cart.filter((curElm) => 
      {
        return curElm.id !== product.id
      }))
    }
  }
  //Total Price
  const total = cart.reduce((price, item) => price + item.qty * item.price, 0)
  return (
    <>
      <div className="cart">
        <h3>#cart</h3>
        {
          cart.length === 0 &&
          <>
            <div className="empty_cart">
              <h2>Your shopping cart is empty</h2>
              <Link to='/shop'> <button>Shop now</button> </Link>
            </div>
          </>
        }
        <div className="container">
          {
            cart.map((curElm) => {
              return (
                <>
                  <div className="box">
                    <div className="img_box">
                      <img src={curElm.image} alt="" />
                    </div>
                    <div className="detail">

                      <div className="info">
                        <h4>{curElm.cat}</h4>
                        <h3>{curElm.Name}</h3>
                        <p>Price: <BsCurrencyRupee />{curElm.price}</p>
                        <p>Total: <BsCurrencyRupee />{curElm.price * curElm.qty} </p>
                      </div>

                      <div className="quantity">
                        <button onClick={() => incqty(curElm)}>+</button>
                        <input type="text" value={curElm.qty} />
                        <button onClick={() => decqty(curElm)}>-</button>
                      </div>
                      <div className='icon'>
                      <li onClick={() => removeproduct(curElm)}><AiOutlineClose /></li>
                    </div>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
        <div className="bottom">
          {
            cart.length > 0 &&
            <>
              <div className="Total">
                <h4>Sub Total: <BsCurrencyRupee />{total}</h4>
              </div>
              {/* <button >Checkout</button> */}
              <button ><FaBagShopping />&nbsp;Order now</button>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default Cart;
