import React from "react";
import {Row, Col} from "../Grid";
import Moment from 'react-moment';
import numeral from 'numeral';

const PrintTransaction = props => {
    let transactionsSorted = props.transactions.sort( (a,b) => {
       return new Date(a.date) - new Date(b.date);
    })
   
 

return (
    
    <div className="card">
        <div className="card-body player">
            <div className="article">
                <h1>All Transactions</h1>
                {transactionsSorted.map(transaction => { 
                    
                     let transactionCurrency = numeral(transaction.amount).format('0,0[.]00');

                    return (
                    <li className="search-list list-group-item">
                        <Row
                        className="PrintTransaction row" 
                        id={transaction.id} 
                        key={transaction._id}>
                               
                            <Col
                                className="col-md-6 transactionInfo">
                                <h2 className="transactionamount">You bought {transaction.description} on  <Moment date={transaction.date} format="MM/DD/YYYY"/></h2>
                                <h2 className="transactionVenue">in the category: {transaction.category} for ${transactionCurrency}</h2>
                              
                               
                            </Col>
                        </Row>

                            </li>
                            );
                        })}
                    </div>
                </div>
            </div>
       
        )
}
export default PrintTransaction;