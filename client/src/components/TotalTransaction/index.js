import React from "react";
import {Row, Col} from "../Grid";
import Moment from 'react-moment';


const TotalTransaction = props => {
    // let transactionsSorted = props.transactions.sort( (a,b) => {
    //    return new Date(a.date) - new Date(b.date);
    // })
   

return (
    
    <div className="card">
        <div className="card-body player">
            <div className="article">
                <h1>All Transactions</h1>
                {props.foodArray.map(food => { 
                    return (

                        <Row
                        className="TotalTransaction row" 
                        id={food._id} >
                               
                            <Col
                                className="col-md-6 transactionInfo">
                                <h2 className="transactionamount">Your total in the category {food.category}  </h2>
                                <h2 className="transactionVenue"> for ${food.amount + food.amount}</h2>
                              
                               
                            </Col>
                        </Row>

            
                            );
                        })}
                    </div>
                </div>
            </div>
       
        )
}
export default TotalTransaction;