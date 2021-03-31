import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from "react-bootstrap";

const ArticlesList = ({ articles }) => (
    <React.Fragment>
        <Row>
                <Col>
                    {articles.map((article, key) => (
                        <Card style={{ width: '18rem' }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Title>{article.title}</Card.Title>
                                <Card.Text>
                                    {article.content[0].substring(0, 150)}...
                                </Card.Text>
                                <Link key={key} to={`/article/${article.name}`}>
                                    <Button variant="primary">Go to Article</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
        </Row>
    </React.Fragment>
);

export default ArticlesList;

{/* <Link key={key} to={`/article/${article.name}`}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0, 150)}...</p>
            </Link> */}