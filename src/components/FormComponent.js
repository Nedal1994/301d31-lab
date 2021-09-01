import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'

class FormComponent extends React.Component {
    render() {
        return (
            <>
                <Form onChange={this.props.formSelect}>
                    <Form.Group>
                        <Form.Control as='select' aria-label="Default select example">
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="100">More</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </>
        );
    }
}
export default FormComponent