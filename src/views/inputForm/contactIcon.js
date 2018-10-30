import React from 'react';
import {FormGroup, Label, Col, Input,FormText} from 'reactstrap';


const ContactIcon = (props) => (
  <FormGroup className="ml-5" row>
    <Label for={props.for} sm={3}>{props.text}</Label>
    <Col sm={10}>
      <Input type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} />
{ props.info ?  <FormText color="white">
        {props.info}
      </FormText> : null}
    </Col>
  </FormGroup>
)

export default ContactIcon
