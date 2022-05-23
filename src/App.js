import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';

export default function App() {
  const posts = [
    {
      id:1, 
      title: 'My First Post',
      date: '4-7-2020',
      content: 'Thia is my first post!'
    },
    {
      id:2, 
      title: 'How to beat boss in alphacity 4',
      date: '4-8-2020',
      content: 'Can anyone give me some tips?'
    },
    {
      id:3, 
      title: 'Vacation Time!',
      date: '4-9-2020',
      content: 'Finally get to play my game as much as I want!'
    }
  ];

  return (
    <div>
        <Container>
    <Router>
      <div>

      <Nav defaultActiveKey="/home" as="ul">
      <Button variant="outline-secondary">
            <Link to="/">Home</Link>
          </Button>
  <Nav.Item as="li">
  <Button variant="outline-secondary">
          <Link to="/friends">Friends</Link>
          </Button>
  </Nav.Item>
  <Nav.Item as="li">
  <Button variant="outline-secondary">
          <Link to="/posts">Posts</Link>
          </Button>
  </Nav.Item>
  <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Contact Us</Dropdown.Item>
    <Dropdown.Item href="#/action-2">About Us</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Merchandise</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</Nav>
        
        <Switch>
          <Route path='/posts'>
            <Posts posts={posts} />
          </Route>
          <Route path="/friends">
            <Friends names={['Tom', 'Sally', 'Samantha', 'Andy']} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </Container> 
    </div>
  );
}



function Home() {
  return (
    <div>
          <Carousel>
  <Carousel.Item interval={900}>
    <img
      className="d-block w-100"
      src="https://cdn.mos.cms.futurecdn.net/gKytN5Fo2sQRbJf5MhxMeL-1200-80.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={900}>
    <img
      className="d-block w-100"
      src="https://preview.redd.it/c4h440zyi2h81.jpg?width=640&crop=smart&auto=webp&s=c256208cf8f113c7b422b6dfcbd82ecf4b445728"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/92/26/f7/9226f75819d0d7fee87e4d3dedabaec6.png"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  
<container>
<Image src="https://ranproject.eu/sites/ran.eu/files/styles/large/public/top-images/joystick-2389216_1280.png?itok=owSKOV8-" className="githubIcon" to="" />
<Image style={{height: "400px"}} src="https://static.vecteezy.com/system/resources/previews/002/565/463/non_2x/open-gift-box-with-fly-hearts-vector.jpg" className="githubIcon" to="" />
<Image style={{height: "300px"}} src="https://cdn.dribbble.com/users/3620942/screenshots/6718766/aplod_dribble_1_4x.jpg?compress=" className="githubIcon" to="/" />
</container>
    </div>
  );
}

function Friends(props) {
  const { names } =  props;
  return (
    <div>
      <Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="https://i.pinimg.com/474x/a1/9d/fd/a19dfd0cd5b84390c983b372c91b7f22.jpg"
  />
  <Figure.Caption>
  {names[0]}
  </Figure.Caption>
  <Button variant="primary">Message</Button>{' '}
</Figure>
<Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0i99dx1n3nGQH1Wuui-1E0-t5pVzzH-922E4uqIAtkcSoi-3_XHfjushsQ9oAQ15yihU&usqp=CAU"
  />
  <Figure.Caption>
  {names[1]}
  </Figure.Caption>
  <Button variant="primary">Message</Button>{' '}
</Figure>
<Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="https://i.pinimg.com/236x/f8/3e/26/f83e26d56b2700bcd71a504cc80dc9b2.jpg"
  />
  <Figure.Caption>
  {names[2]}
  </Figure.Caption>
  <Button variant="primary">Message</Button>{' '}

</Figure>
<Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="https://i.pinimg.com/474x/62/51/c3/6251c3634cb95c9ffcc67fe3783dfb75.jpg"
  />
  <Figure.Caption>
  {names[3]}
  </Figure.Caption>
  <Button variant="primary">Message</Button>{' '}
</Figure>
    {/* <ul>
      {names.map((friend, index) => (
        <li key={index}>{friend}</li>
      ))}
    </ul> */}
  </div>
  );
  
}

function Posts({posts}) {
  const match = useRouteMatch();
  const findPostById = (id) =>
  posts.filter((post) => post.id == id)[0];

  return (
    <div>
      <h2>Posts</h2>
      
        {posts.map((post, index) => {
          return (
            <Alert key={index} variant="primary">
              <Link to={`${match.url}/${post.id}`}>
                {post.title}
              </Link>
            </Alert> 
          );
        })}
      
      <Switch>
        <Route
        path={`${match.path}/:postId`}
        render={(props) => (
        <Post
          {...props}
          data={findPostById(props.match.params.postId)}
        />
        )}
        />
        <Route path={match.path}>
          <h3>Please Select a Post.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Post(props) {
  const { data } = props;
  return data == undefined ? <h1>404 Not Found</h1> : (
    <Card>
      <Card.Header>{data.title}</Card.Header>
      <Card.Body>
        <Card.Subtitle>{data.date}</Card.Subtitle>
        <Card.Text>{data.content}</Card.Text>
      </Card.Body>
    </Card>
  );
}