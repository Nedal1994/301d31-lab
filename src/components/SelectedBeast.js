import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component
{
  render() 
  {
    return(
      <>
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.data.title}</Modal.Title>
        </Modal.Header>
        <Card.Img variant="top" src={this.props.data.image_url} onClick={this.incrementVotes} />
        <Modal.Body>
          <br></br>
        <p>{this.props.data.description}</p>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )
  }
}
export default SelectedBeast