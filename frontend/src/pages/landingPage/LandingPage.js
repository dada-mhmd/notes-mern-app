import { Button, Container, Row } from 'react-bootstrap'
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
              <a href='/login'>
                <Button size='lg' className='landingbutton'>
                  Login
                </Button>
              </a>
              <a href='/register'>
                <Button
                  size='lg'
                  className='landingbutton'
                  variant='outline-primary'
                >
                  Register
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage
