import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdEye } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoShareSocial } from "react-icons/io5";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa6";
import './Home.css';
import Homeproduct from './Home_product';


const Home = ({addtocart}) => {
    //Product category
    const [newProduct, setNewProduct] = useState([])
    const [featuredProduct, setFeaturdProduct] =  useState([])
    const [topProduct, setTopProduct] =  useState([])
    //Trending Product 
    const [trendingProduct, settrendingProduct] = useState (Homeproduct)
     //filter of trending product
    const filtercate = (x) =>{
       const filterproduct = Homeproduct.filter((curElm) =>
       {
           return curElm.type === x
       }) 
       settrendingProduct(filterproduct)
    }
    // All trending product
    const allTrendingProduct = () =>{
        settrendingProduct(Homeproduct)
    }
    // Product Type
    useEffect(() =>{
        productcategory()
    })
    const productcategory = () =>{
        // New Product
        const newCategory = Homeproduct.filter((x) => {
            return x.type === 'new'
        })
        setNewProduct(newCategory)

        // Featured Product
    const featuredcategory = Homeproduct.filter((x) => 
    {
      return x.type === 'featured'
    })
    setFeaturdProduct(featuredcategory)

    // Top Product
    const topcategory = Homeproduct.filter((x) => 
    {
      return x.type === 'top'
    })
    setTopProduct(topcategory)
    }
  return (
    <>
      <div className="home">
          <div className="top1_banner">
              <div className="content">
                  <h3>Organic Products</h3>
                  <h2>Stay Healthy</h2>
                  <p>30% off at your first order</p>
                  <Link to='/shop' className='link'>Explore Now</Link>
              </div>
          </div>
          <div className="top2_banner">
              <div className="content">
                 
              </div>
          </div>
          <div className="trending">
              <div className="container">
                  <div className="left_box">
                      <div className="header">
                          <div className="heading">
                              <h2 onClick={() => allTrendingProduct () }>Trending Items</h2>
                          </div>
                          <div className="cate">
                              <h3 onClick={() => filtercate ('new')}>New</h3>
                              <h3 onClick={() => filtercate ('featured')}>Featured</h3>
                              <h3 onClick={() => filtercate ('top')}>Top selling</h3>
                          </div>
                      </div>
                      <div className="products">
                              <div className="container">
                                  {
                                      trendingProduct.map((curElm) => 
                                      {
                                          return(
                                              <>
                                              <div className="box">
                                                  <div className="img_box">
                                                      <img src={curElm.image} alt=""/>
                                                      <div className="icon">
                                                          <div className="icon_box">
                                                          <IoMdEye />
                                                          </div>
                                                          <div className="icon_box">
                                                          <FaHeart />
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="info">
                                                      <h3>{curElm.Name}</h3>
                                                      <p><BsCurrencyRupee />{curElm.price}</p>
                                                      <button className='btn' onClick={() => addtocart (curElm)}>Add to cart</button>
                                                  </div>
                                              </div>
                                              </>
                                          )
                                      })
                                  }
                              </div>
                              <button>Show More</button>
                          </div>
                  </div>
                  <div className="right_box">
                      <div className="right_container">
                          <div className="testimonial">
                              <div className="head">
                                  <h3>Our Testimonial</h3>
                              </div>
                              <div className="detail">
                                  <div className="img_box">
                                      {/* <img src='./image/T1.avif' alt=""/> */}
                                  </div>
                                  <div className="info">
                                      <h3>Rosy Sans</h3>
                                      <h4>Trusted Customer</h4>
                                      <p>All products are fully trusted and Organic.
                                        I use all products over a long time period.
                                        So Happy With Gavai Swad 
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div className="newsletter">
                              <div className="head">
                                  <h3>mail us</h3>
                              </div>
                              <div className="form">
                                  <p>join our mailing list</p>
                                  <input type="email" placeholder='E-mail' autoComplete='off' />
                                  <button>Subscribe</button>
                                  <div className="icon_box">
                                      <div className="icon">
                                      <FaFacebookF />
                                      </div>
                                      <div className="icon">
                                      <FaInstagram />
                                      </div>
                                      <div className="icon">
                                      <AiOutlineYoutube />
                                      </div>
                                      <div className="icon">
                                      <IoShareSocial />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* <div className='banners'>
          <div className='container'>
            <div className='left_box'>
              <div className='box'>
                <img src='images/banners/2.png' alt='banner'></img>
              </div>
              <div className='box'>
                <img src='images/banners/3.png' alt='banner'></img>
              </div>
            </div>
            <div className='right_box'>
              <div className='top'>
                <img src='images/banners/4.png' alt=''></img>
                <img src='images/banners/5.png' alt=''></img>
              </div>
              <div className='bottom'>
                <img src='images/banners/6.png' alt=''></img>
              </div>
            </div>
          </div>
        </div> */}
        <div className='product_type'>
          <div className='container'>
            <div className='box'>
              <div className='header'>
                <h2>New Product</h2>
              </div>
              {
                newProduct.map((curElm) => 
                {
                  return(
                    <>
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={curElm.image} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p><BsCurrencyRupee />{curElm.price}</p>
                        <div className='icon'>
                          <button><IoMdEye /></button>
                          <button><FaHeart /></button>
                          <button onClick={() => addtocart (curElm)}><FaCartPlus /></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>
            <div className='box'>
              <div className='header'>
                <h2>Featured Product</h2>
              </div>
              {
                featuredProduct.map((curElm) => 
                {
                  return(
                    <>
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={curElm.image} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p><BsCurrencyRupee />{curElm.price}</p>
                        <div className='icon'>
                          <button><IoMdEye /></button>
                          <button><FaHeart /></button>
                          <button onClick={() => addtocart (curElm)}><FaCartPlus /></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>
            <div className='box'>
              <div className='header'>
                <h2>Top Product</h2>
              </div>
              {
                topProduct.map((curElm) => 
                {
                  return(
                    <>
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={curElm.image} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p><BsCurrencyRupee />{curElm.price}</p>
                        <div className='icon'>
                          <button><IoMdEye /></button>
                          <button><FaHeart /></button>
                          <button onClick={() => addtocart (curElm)}><FaCartPlus /></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
