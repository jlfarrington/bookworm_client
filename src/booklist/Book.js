import React from 'react'; 
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

  const Book = ({title, genre, finished, tbr, author}) => {

 
    
    return (
        <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{author}</CardSubtitle>
          <CardText>
              <ul>
                <li>{genre}</li>
                <li>{finished ? "finished" : "not quite finished"}</li>
                <li>{tbr ? "To Be Read" : "Not on my To Be Read List"}</li>
              </ul>
          </CardText>
        </CardBody>
      </Card>
    </div>
    )
};

export default Book;