import React from "react";
import {Row, Col} from "../Grid";
import Moment from 'react-moment';


const TotalTransaction = props => {

    let foodSum = props.foodArray.reduce(function(prev, current) {
        return prev + +current.amount
      }, 0);
      let transportationSum = props.transportationArray.reduce(function(prev, current) {
        return prev + +current.amount
      }, 0);
      let lifestyleSum = props.lifestyleArray.reduce(function(prev, current) {
        return prev + +current.amount
      }, 0);
      let housingSum = props.housingArray.reduce(function(prev, current) {
        return prev + +current.amount
      }, 0);
      let debtSum = props.debtArray.reduce(function(prev, current) {
        return prev + +current.amount
      }, 0);
      let insuranceSum = props.insuranceArray.reduce(function(prev, current) {
        return prev + +current.amount
      }, 0);
      let savingsSum = props.savingsArray.reduce(function(prev, current) {
        return prev + +current.amount
      }, 0);
return (
    
    <div className="card">
        <div className="card-body player">
            <div className="article">
                <h1>Transaction Totals</h1>
                        <Row className="TotalTransaction row">  
                            <Col
                                className="col-md-6 transactionTotals">
                                <h2 className="transactionFood"> Food Sum: ${foodSum}</h2>
                                <h2 className="transactionTransportation"> Transportation Sum: ${transportationSum}</h2>
                                <h2 className="transactionLifestyle"> Lifestyle Sum: ${lifestyleSum}</h2>
                                <h2 className="transactionHousing"> Housing Sum: ${housingSum}</h2>
                                <h2 className="transactionDebt"> Debt Sum: ${debtSum}</h2>
                                <h2 className="transactionInsurance"> Insurance Sum: ${insuranceSum}</h2>
                                <h2 className="transactionSavings"> Savings Sum: ${savingsSum}</h2>
                            </Col>
                        </Row>

                    </div>
                </div>
            </div>
       
        )
}
export default TotalTransaction;