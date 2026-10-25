import { faArrowLeft, faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/slice/wishlistSlice';
import { addToCart } from '../redux/slice/cartSlice';




function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);
  
  const dispatch = useDispatch()

  const handlecart = (item)=>{
       dispatch(addToCart(item))
       dispatch(removeFromWishlist(item.id))

  }


  return (
      <>
    {wishlistArray?.length>0? <Row className='w-100 p-3 my-5'>
      {wishlistArray?.map((item)=>(<Col sm={12} md={4} lg={3} className='mt-3 d-flex justify-content-center p-3'>
        <Card style={{ width: '100%' }} className='border shadow rounded'>
      <Card.Img variant="top" src="https://assets.myntassets.com/w_200,q_50,,dpr_3,fl_progressive,f_webp/assets/images/31472271/2025/2/21/7cbe9410-a9b3-460c-adeb-f17b4546eedc1740148775321-Campus-Sutra-Men-Comfort-Opaque-Checked-Casual-Shirt-8181740-1.jpg" className='w-100' style={{height:'250px'}}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          <p className='text-center fw-bolder fs-3 text-primary'> Price : ${item.price}</p>
        </Card.Text>
       <div className='d-flex justify-content-between'>
          <Button variant="danger" onClick={()=>dispatch(removeFromWishlist(item.id))}><FontAwesomeIcon icon={faTrash} /></Button>
           <Button variant="success" onClick={()=>handlecart(item)}><FontAwesomeIcon icon={faCartShopping} /></Button>
       </div>
      </Card.Body>
    </Card>
      </Col>))}
    </Row>
 :
    <div style={{width:'100%', height:'70vh', display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
  
      <img src="https://cdn.dribbble.com/userupload/20456914/file/still-ae5b582f7f6105e161470db1e0879a19.gif" alt="gif of empty wishlist" />

      <button className='btn btn-primary mt-4'><FontAwesomeIcon icon={faArrowLeft} className='me-2'/></button>
    </div>}
    </>
  )
}

export default Wishlist