import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedDishDetail: this.props.selectedDish
        };
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        else
            return(
                <div></div>
            );
      }

      renderComments(comments) {
        if(comments == null) {
        return (
            <div></div>
            )
        }

        const commentsDetails = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>{comment.author}, 
                    &nbsp; 
                    {new Intl.DateTimeFormat('en-US',{
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                    </p> 
                </li>
            )
        })

        return (
            <div className='col-12 col-md-5 m-1'>
                <h4>Comment</h4>
                <ul className='list-unstyled'>
                    {commentsDetails}
                </ul>
            </div>
        )
      }

      render() {
          const dish = this.props.dish;
          console.log(dish);

          if(dish == null){
              return (<div></div>);
          }

          return(
              <div className='row'>
                  {this.renderDish(dish)}
                  {this.renderComments(dish.comments)}
              </div>
          )
      }
}

export default DishDetail;