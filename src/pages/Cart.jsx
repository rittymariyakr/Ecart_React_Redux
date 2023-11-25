import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';


function Cart() {

  const cartArray = useSelector((state)=>state.cartReducer)
  console.log(cartArray);

  const dispatch = useDispatch()

  const [total , setTotal] = useState(0)
  const navigate = useNavigate()

  const getTotal = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map((item)=>item?.price).reduce((p1,p2)=>p1+p2))
    }
    else{
setTotal(0)
    }
  }

  const checkout = ()=>{
    dispatch(emptyCart())
    alert('Your Order Placed')
    navigate('/')
  }

  useEffect(()=>{
    getTotal()
  },[cartArray])

  return (
    <>
    <div style={{marginTop:'150px'}}>
    {cartArray?.length>0?
      <div className='row w-100'>
        
          <div className='col-lg-6 m-5'>
      <table className='table border shadow'>
        <thead>
          <tr>
            <th>#</th>
            <th>product</th>
            <th>Image</th>
            <th>Price</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {cartArray?.map((item, index)=>(<tr>
          <td>{index+1}</td>
          <td>{item.title}</td>
          <td><img style={{height:'100px', width:'100px'}} src={item.thumbnail} alt="" /></td>
          <td>{item.price}</td>
          <td><Button onClick={()=>dispatch(removeFromCart(item.id))} variant="outline-danger btn rounded"><i class="fa-solid fa-trash"></i></Button></td>
          </tr>))
            }
        </tbody>
      </table>
          </div>

          <div className='col-lg-4 d-flex justify-content-center align-items-center flex-column'>
            <div className='border shadow p-5'>
              <h3 className='text-danger'>Cart Summmary</h3>
              <h5>Total Numbrer of Products : <span className='text-primary fw-bolder fs-2 ms-3'>{cartArray?.length}</span></h5>
              <h5>Total Price : € {total}</h5>
              <button onClick={checkout} className='btn btn-success rounded w-100 mt-3'>Checkout</button>
            </div>
            
          </div>

    </div>
    

    
      :
      <div style={{ height: '100vh' }} className='d-flex flex-column justify-content-center align-items-center'>
            <img height={'300px'} src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="no image" />
            <h4 className='text-danger fw-bolder '>Your Cart is Empty</h4>
            <button  className='btn btn-warning rounded mt-3' ><Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>Back to Home</Link></button>
          </div>
      }

      
    </div>
    </>
  )
}

export default Cart
