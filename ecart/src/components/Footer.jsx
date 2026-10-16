import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';






function Footer() {
  return (
    <div className='container-fluid'>
      <div className="row p-5" style={{backgroundColor:'blueviolet'}}>
        <div className="col-md-4">
          <h4 className='text-white'><FontAwesomeIcon icon={faCartShopping} />E-cart</h4>
          <p className='text-white' style={{fontSize:'13px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quasi facilis dolorem ipsum neque error illum, perspiciatis et, quisquam consectetur impedit voluptate tenetur provident commodi accusamus quod vero, molestiae adipisci.</p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-2 text-white">
          <h4 className='text-white'>Links</h4>
          <p style={{fontSize:'13px'}}>Home Page</p>
          <p style={{fontSize:'13px'}}>WishList</p>
          <p style={{fontSize:'13px'}}>Cart</p>
        </div>
        <div className="col-md-2 text-white">
          <h4 className='text-white'>Guides</h4>
          <p style={{fontSize:'13px'}}>React</p>
          <p style={{fontSize:'13px'}}>React Bootstrap</p>
          <p style={{fontSize:'13px'}}>Bootswatch</p>
        </div>
        <div className="col-md-3 ">
          <h4 className='text-white'>Contact Us</h4>
          <div className='d-flex'>
            <input type="text" placeholder='Enter your email id' />
            <button className='btn btn-warning ms-2'>Subscribe</button>
          </div>
          <div className='text-white d-flex justify-content-evenly mt-4'>
            <FontAwesomeIcon icon={faInstagram} size="xl" />
            <FontAwesomeIcon icon={faTwitter} size="xl" />
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
            <FontAwesomeIcon icon={faFacebook} size="xl" />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer