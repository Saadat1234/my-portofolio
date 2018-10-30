import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText, CardColumns, CardBody, Badge } from 'reactstrap';
import {Link} from 'react-router-dom';


 import projects from '../project.json';



class Projects extends Component {


  componentDidMount(){
    document.title = 'Projects | Welcome To My Portofolio';
  }


    render() {
      return (
    <CardColumns>
      {projects.map((item, i) => (
        <Card key={i}>
          <CardImg top width="100%" src={item.thumbnailUrl} alt="Card image cap" />
          <CardBody>
            <CardTitle className="h3">{item.title}</CardTitle>
            <CardText>{item.description}</CardText>

             {item.tags.map((tag, i) => (
              <Badge key={i} color="success" pill>{tag}</Badge>

            ))}
            <Link className="btn btn-primary" to={`/projects/${i}`}>More...</Link>

          </CardBody>
        </Card>
      )) }

    </CardColumns>
   )};
}
export default Projects
