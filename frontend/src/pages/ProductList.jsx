import React ,{useEffect,useState}from 'react'
import axios from '../axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../stylesheets/CarList.css'
import Banner from '../components/Banner'
import { useLocation } from 'react-router-dom';


const ProductList = () => {

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const brand = params.get('brand');
  const gender = params.get('gender');
  const category = params.get('category');
  const name = params.get('name');
  
  let query = ""; 
  if(brand)
  {
    query = brand;
  }
  else if(gender){
    query = gender
  }
  else if(category){
    query = category
  }
  else if(name)
  {
    query = name
  }

  const [product, setProduct] = useState("");
  useEffect(() => {
    const fetchdata = async () => {
      console.log("Query : ",query);
      const data = await axios.get(`/product/get/${query}`);
      setProduct(data);
      console.log(data);
    };
    fetchdata();
  }, [query]);


  return (
    <div>
      <Navbar/>

      {product &&
          product?.data.map((product) => (
            // console.log(product.Name)
            <Banner
              key = {product._id}
              id = {product._id}
              name = {product.Name}
              category = {product.Category}
              image={product.Image}
              price = {product.Price}
              brand = {product.Brand}
              desc = {product.Desc}
            />
          ))}
      <Footer/>
    </div>
  )
}

export default ProductList