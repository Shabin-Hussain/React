import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux';




function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer)
  console.log(cartArray);
  

  return (
    <>
    <div className="row w-100">
      <div className="col-md-1"></div>
      <div className="col-md-6">
        <table className='table my-5 shadow'>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Dior J 'Adore</td>
              <td><img src="https://assets.myntassets.com/w_200,q_50,,dpr_3,fl_progressive,f_webp/assets/images/31472271/2025/2/21/7cbe9410-a9b3-460c-adeb-f17b4546eedc1740148775321-Campus-Sutra-Men-Comfort-Opaque-Checked-Casual-Shirt-8181740-1.jpg" alt="no image" width={'150px'} height={'150px'}/></td>
              <td>$ 89.99</td>
              <td><button className='btn btn-danger'><FontAwesomeIcon icon={faTrash} /></button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-md-4 d-flex justify-content-center">
        <div className='border shadow p-4 my-5'>
          <h3 className='text-primary text-center'>Cart Summary</h3>
          <h4 className='mt-3'>Total number of items: 3</h4>
          <h4>Total Price : $800</h4>
          <button className='btn btn-success w-100 mt-3'>CheckOut</button>
        </div>
      </div>
      <div className="col-md-1"></div>
      
    </div>

      <div style={{width:'100%', height:'70vh', display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      
          <img src="https://assets-v2.lottiefiles.com/a/051075ae-1161-11ee-b755-1f6c04b0d17f/GRkHCbLgXB.gif" alt="gif of empty wishlist" height={'200px'}/>
    
          <button className='btn btn-primary mt-4'><FontAwesomeIcon icon={faArrowLeft} className='me-2'/></button>
        </div>
    </>
  )
}

export default Cart