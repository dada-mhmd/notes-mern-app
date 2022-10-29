import { Button, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './landingPage.css'

const LandingPage = () => {
  return (
    <div className='main'>
      <Container>
        <Row>
          <div className='intro-text'>
            <div>
              <h1 className='title'>Welcome to notes</h1>
              <p className='subtitle'>One place for all your notes</p>
            </div>
            <div className='buttonContainer'>
              <Link to='/login'>
                <Button size='lg' className='landingbutton'>
                  Login
                </Button>
              </Link>
              <Link to='/register'>
                <Button
                  size='lg'
                  className='landingbutton'
                  variant='outline-primary'
                >
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage
