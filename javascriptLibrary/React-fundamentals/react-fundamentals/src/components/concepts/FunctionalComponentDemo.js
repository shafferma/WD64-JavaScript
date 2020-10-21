import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';

const FunctionalComponentDemo = () => {
    return (
        <Container className="main">
            <Row>
                <Col xs="12">
            <h1>Functional Component</h1>
            <p>Functional components are the primarily tool in React to build small, modular pieced of your page..</p>
            <dl>
                <dt>Can use state</dt>
                <dd>With the 'useState hook, functional components can now both render a display to the page and update the information to be shown.</dd>
                <dt>No 'this' keyword</dt>
                <dd>Older class components use 'this', fucntional components have no 'this' object.</dd>
                <dt>Can use effects</dt>
                <dd>With the 'useEffect' hook, functional components can perform side effects with any props or state changes.</dd>
                <dt>return()</dt>
                <dd>Must return a single element, but this element may have nested elements inside.</dd>
            </dl>
            </Col>
            </Row>
            <hr/>
        <h1>Functional Syntax versus Arrow Function</h1>
        <Row>
        <Col md="6">
            <HelloWorldFatArrow className="logo" />
        </Col>
        <Col md="6">
            <HelloWorld />
        </Col>
        </Row>
    </Container>
    );
};

export default FunctionalComponentDemo;

const HelloWorld = function() {
    return (
        <div>
            <Card>
                <img width="100%" height="280px" src="https://i.ytimg.com/vi/BwAakF_VUV8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDKwlny6k59l8MQ1X8fKqgthbTMhA" alt="Card cap" />
                    <CardBody>
                        <CardTitle>Regular Ole Function</CardTitle>
                        <CardSubtitle>A JS Library</CardSubtitle>
                        <CardText><pre>const HelloWorld = function() </pre>.</CardText>
                        <Button>Go somewhere, yo</Button>
                    </CardBody>
            </Card>
        </div>
    )
};

//Fat Arrow Functional Component - 3 fewer lines. Common in react....
const HelloWorldFatArrow = () => 
    <div>
        <Card>
            <img width="100%" height="280px" src="https://res.cloudinary.com/practicaldev/image/fetch/s--AwyfOM82--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/1024/1%2A9s_UE0CM6cz2XJq8CTf29w.jpeg" alt="Card cap" />
            <CardBody>
                <CardTitle>Fat Arrow</CardTitle>
                <CardSubtitle>A JS Library</CardSubtitle>
                <CardText><pre>const HelloWorld = () => </pre>.</CardText>
                <Button>Go somewhere man</Button>
            </CardBody>
        </Card>
    </div>