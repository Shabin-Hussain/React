import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





function Home() {
  return (
    <>
    <Row className='w-100 p-3 my-5'>
      <Col sm={12} md={4} lg={3} className='mt-3 d-flex justify-content-center p-3'>
        <Card style={{ width: '100%' }} className='border shadow rounded'>
      <Card.Img variant="top" src="https://assets.myntassets.com/w_200,q_50,,dpr_3,fl_progressive,f_webp/assets/images/31472271/2025/2/21/7cbe9410-a9b3-460c-adeb-f17b4546eedc1740148775321-Campus-Sutra-Men-Comfort-Opaque-Checked-Casual-Shirt-8181740-1.jpg" className='w-100' style={{height:'250px'}}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       <div className='d-flex justify-content-between'>
          <Button variant="danger"><FontAwesomeIcon icon={faHeart} /></Button>
           <Button variant="success"><FontAwesomeIcon icon={faCartShopping} /></Button>
       </div>
      </Card.Body>
    </Card>
      </Col>
    </Row>
    </>
  )
}

export default Home