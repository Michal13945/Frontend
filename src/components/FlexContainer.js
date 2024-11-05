import React, { useContext } from 'react';
import AppContext from '../data/AppContext';
import { Container, Row, Col } from 'react-bootstrap';

const FlexContainer = ({ element: Element, data }) => {

    return (
        <Container>
            <Row className="d-flex flex-wrap justify-content-center">
                {data.map(item => (
                    <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <Element {...item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default FlexContainer;
