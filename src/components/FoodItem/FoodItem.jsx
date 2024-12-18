import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {

  const {cartItem,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className="Food-item">
        <div className="food-item-img-container">
            <img src={image} alt="" className="food-item-image" />
            {!cartItem[id]
              ?<img className='add' onClick={()=>addToCart(id)}src={assets.add_icon} alt="" />
              :<div className='food-item-counter'>
                  <img onClick={()=>removeFromCart(id)} src={assets.remove_icon} alt="" />
                  <p>{cartItem[id]}</p>
                  <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
              
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_stars} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem