import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";


  function RenderDish({dish}) {
    if (dish != null)
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    else return <div></div>;
  }

  function RenderComments({comments}) {
    if (comments == null) {
      return <div></div>;
    }

    const commentsDetails = comments.map((comment) => {
      return (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            {comment.author}, &nbsp;
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(comment.date)))}
          </p>
        </li>
      );
    });

    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comment</h4>
        <ul className="list-unstyled">{commentsDetails}</ul>
      </div>
    );
  }

  const DishDetail = (props) => {


    if (this?.props?.dish != null) {
        return (
            <div className="container">
              <div className="row">
                <RenderDish dish={props?.dish} />
                <RenderComments comments={props?.dish.comment} />
              </div>
            </div>
          );
    }
    else {
        return (<div></div>)
    }
  }

export default DishDetail;
