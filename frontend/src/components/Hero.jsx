import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">MERN Authentication</h1>
          <p className="text-center mb-4">
            This is a boilerplate for MERN authentication that stores a JWT in
            an HTTP-Only cookie. It also uses Redux Toolkit and the React
            Bootstrap library
          </p>
          <div className="d-flex flex-column align-items-center">
            {userInfo ? (
              <>
                <h2>You are Logged In ☑</h2>
                <div className="mb-2 my-4">
                  <h5>✔ Click on "Profile" to update the user details.</h5>
                  <h5>✔ Click on "Logout" to log out the user.</h5>
                </div>
              </>
            ) : (
              <>
                <Row className="mb-3">
                  <Col>
                    <LinkContainer to="/login">
                      <Button variant="primary" className="me-3" style={{ width: "100px", height: "100px" }}>
                        Log In
                      </Button>
                    </LinkContainer>
                  </Col>
                  <Col>
                    <LinkContainer to="/register">
                      <Button variant="secondary" style={{ width: "100px", height: "100px" }}>
                        Register
                      </Button>
                    </LinkContainer>
                  </Col>
                </Row>
              </>
            )}
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
