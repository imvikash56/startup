import { Row, Col, CardTitle, Card, Form, Label, Input, Button } from 'reactstrap'
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'

const iconStyles = {
  marginRight: '10px',
};
const Login = () => {
  return (
    <div className=' card2 '>
      <Row className='m-0'>
        <Col className='d-none d-lg-flex align-items-center p-5 textColor' lg='8' sm='12'>
          <div>
            <h2>Generate Awesome Web Page</h2>
          </div>
          <br></br>
          <div>
            <p>The most important part of the Startup is the samples. The samples from a set of 25 usable pages you can use as-is or you can add new blocks.</p>
          </div>
          
        </Col>


        <Col className='d-flex align-items-center px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 ' sm='8' md='6' lg='12'>
            <br></br>
            <CardTitle tag='h2' className='fw-bold mb-1 textColor'>
              Sign Up Now..! 👋
            </CardTitle>

            <Form className=' mt-2' >
              <div className='mb-1'>
                <Label className=' textColor' for='login-email'>
                  Email
                </Label>
                <Input type='email' id='login-email' placeholder='Your email' autoFocus />
              </div>
              <div className='mb-1'>
                <Label className='textColor' for='login-email'>
                  Password
                </Label>
                <Input type='password' id='password' placeholder='Your password' autoFocus />
              </div>
              <br></br>
              <div className='form-check mb-1'>
                <Input type='checkbox' id='' />
                <Label className='form-check-label textColor' >
                  I agree to the Terms of Service.
                </Label>
              </div>
              <Button color='primary' block>
                Sign in
              </Button>
              <br></br>
              <div className='textColor'>or</div>
            </Form>
            <br></br>
            <Button color='primary' block style={iconStyles}>
              <Twitter size={14} style={iconStyles} />
              Login via Twiter
            </Button>

            <br></br>
            <div className='textColor'>
              Do you have an Account?
              <Button className='textColor' color='primary' outline size='sm' style={{ marginLeft: '10px' }}>
                Sign In
              </Button>
            </div>


            <div className='d-flex justify-content-center textColor'>
              <Button color='facebook'>
                <Facebook size={14} className='textColor' />
              </Button>
              <Button color='twitter' className='textColor'>
                <Twitter size={14} />
              </Button>
              <Button color='google ' className='textColor'>
                <Mail size={14} />
              </Button>
              <Button className='me-0 textColor' color='github'>
                <GitHub size={14} />
              </Button>
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Login
