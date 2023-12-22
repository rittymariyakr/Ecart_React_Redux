import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';


function WishList() {

  //accessing state from store
  const wishlistArray = useSelector((state) => state.wishlistReducer)
  console.log(wishlistArray);

  //calling action from whislistSlice (removeFromWishlist function)
  const dispatch = useDispatch()

  //add item to cart from wishlist and also remove that item from wishlist when click on wishlist button in the card
  const handleWishlist = (item)=>{
    dispatch(addToCart(item)) //adding item to cart
    dispatch(removeFromWishlist(item.id)) //removing item from wishlist
  }

  return (
    <div>
      <Row className='ms-5 me-3' style={{ marginTop: '70px' }}>

        {wishlistArray?.length > 0 ?
          wishlistArray?.map((item) => (<Col style={{ marginTop: '100px' }} className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19' }}>
              <Card.Img variant="top" src={item.thumbnail} style={{ height: '200px' }} />
              <Card.Body>
                <Card.Title>{item.title.slice(0, 20)}..</Card.Title>
                <Card.Text>
                  <p>{item.description.slice(0, 40)}..</p>
                  <p>Price: € {item.price}</p>
                </Card.Text>
                <div className='d-flex align-items-center justify-content-between'>
                {/* calling action from whislistSlice (removeFromWishlist function) //passing id of item to wishlistSlice action payload */}
                  <Button onClick={()=>dispatch(removeFromWishlist(item.id))} variant="outline-danger btn rounded"><i class="fa-solid fa-trash" ></i> </Button>
                  <Button onClick={()=>handleWishlist(item)} variant="outline-success btn rounded"><i class="fa-solid fa-cart-plus" ></i> </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>))

          :
          <div style={{ height: '100vh' }} className='d-flex flex-column justify-content-center align-items-center'>
            <img height={'300px'} src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="no image" />
            <h4 className='text-danger fw-bolder '>Your Wishlist is Empty</h4>
            <button className='btn btn-warning rounded mt-3' ><Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>Back to Home</Link></button>
          </div>
        }
      </Row>
    </div>
  )
}

export default WishList
