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
                <h1>Money Spent This Month</h1>
                        <Row className="TotalTransaction row">  
                            <Col
                                className="col-md-6 transactionTotals">
                                <h4 className="transactionFood"> Spent on Food: ${foodSum}</h4>
                                <h4 className="transactionTransportation"> Spent on Transportation: ${transportationSum}</h4>
                                <h4 className="transactionLifestyle"> Spent on Lifestyle: ${lifestyleSum}</h4>
                                <h4 className="transactionHousing"> Spent on Housing: ${housingSum}</h4>
                                <h4 className="transactionDebt"> Spent on Debts: ${debtSum}</h4>
                                <h4 className="transactionInsurance"> Spent on Insurance: ${insuranceSum}</h4>
                                <h4 className="transactionSavings"> Spent on Savings: ${savingsSum}</h4>
                                {/* <h4> {budgets}</h4> */}
                            </Col>
                        </Row>

                    </div>
                </div>
            </div>
       
        )
}
export default TotalTransaction;