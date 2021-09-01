import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {
  
    constructor(props)
    {
      super(props);
      this.state={
        numberOfVotes:0
      }
    }

    incrementVotes = () =>
    {
      this.setState(
        {
          numberOfVotes : this.state.numberOfVotes + 1
        }
      )
      this.props.showModel(this.props.data)
    }
    render() {
    return (
        <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.imgUrl} onClick={this.incrementVotes} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
              Number of votes: {this.state.numberOfVotes}
            </Card.Text>
            <Card.Text>
              {this.props.description}
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
      
    )
  }
}

export default HornedBeast