import React from 'react'



const Carbanner = ({img,name,category,brand,size,color,gender,price,desc}) => {

  const addcart = async () => {
      window.alert("Product Added to cart!")
  }
  return (
    <div className='carbanner-container'>
        <div className='carbanner-section'>
            <h1>{name}</h1>
            <div className='image-section'>
              <img src={img} alt="productImage" />
                <div className='specs-cards'>
                    <div>Brand : {brand}</div>
                    <div>Category : {category}</div>
                    <div> Color : {color}</div>
                    {/* <div> Size : {size+' '}</div> */}
                    <div> Gender : {gender}</div>
                </div>
            </div>
            <div className='specs-section'>
                 <button className='s-cartbtn' onClick={addcart}>Add to Cart</button>
                 <div className='s-price'><span>Price : </span>Rs. {price}</div>
                 <div className='s-price'><span>Size : </span>{size+'  '}</div>
                 <div className='s-row'>
                    <div className='s-brand'><span>Brand : </span>{brand}</div>
                    <div className='seperator'>|</div>
                    <div className='s-type'><span>Category : </span>{category}</div>
                    <div className='seperator'>|</div>
                    <div className='s-fuel-type'><span>Color : </span>{color}</div>
                    <div className='seperator'>|</div>
                    <div className='s-year'><span>Gender : </span>{gender}</div>
                 </div>
                 <div className='s-verdict'><span>Description : </span>{desc}</div>
                  
            </div>
        </div>
    </div>
  )
}

export default Carbanner