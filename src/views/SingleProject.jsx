import React, {Component, Fragment} from 'react';
import {Badge} from 'reactstrap';

import projects from '../project.json';

class SingleProjects extends Component {
 componentDidMount(){
   const id = this.props.match.params.id;
   const project = projects[id] || {};

   document.title = `${project.title} | Welcome To My Website`;
 }

 render(){
   const id = this.props.match.params.id;
   const item = projects[id] || {};

   return (
     <Fragment>
       <h2>{item.title}</h2>
       <img className="img-fluid img-thumbnail" width="50%" height="50%" src={item.imageUrl} alt={item.title}/>
       <p>{item.description}</p>
       <div className="tags">
         {item.tags.map(tag => (
           <Badge key={tag} color="primary" pill>{tag}</Badge>
         ))}
       </div>
       <a className="btn btn-primary" href={item.link}>More...</a>
   </Fragment>
   )
 }
}

export default SingleProjects;
