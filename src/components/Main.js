import React from 'react';
import Row from './Row';
import Col from './Col';
import Card from './Card';
import Search from './Search'

const Main = () => {
    return (
        <div className="container">
            <Row>
                <Col>
                    <Card title='Search'>
                        <Search />
                    </Card>
                </Col>
                <Col>
                    <Card title='Map'></Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card title='Employees details'></Card>
                </Col>
            </Row>
        </div>
    );
}

export default Main;






