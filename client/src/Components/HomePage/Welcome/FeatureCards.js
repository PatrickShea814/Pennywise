import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class FeatureCard extends Component {
    render() {
        return (
            <Card className="FeatureCards" onClick={this.props.goToSlide}>
                <Card.Img variant="top" className="FeatureImg" src={this.props.icon} />
                <Card.Body className="FeatureBody">
                    <Card.Title>
                        {this.props.title}
                    </Card.Title>
                    <Card.Text className="ActiveDescription">
                        {this.props.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default FeatureCard;