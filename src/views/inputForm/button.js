import React from 'react';
import { Col, Button, FormGroup } from 'reactstrap';

const ButtonForm = (props) => (
  <FormGroup className="ml-5" check row>
    <Col sm={{ size: 10, offset: 2 }}>
      <Button className="">Send</Button>
    </Col>
  </FormGroup>

)

export default ButtonForm
