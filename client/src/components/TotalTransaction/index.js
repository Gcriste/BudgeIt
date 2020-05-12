import React from "react";
import {Row, Col} from "../Grid";
import Moment from 'react-moment';
import numeral from 'numeral';


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

      let foodCurrency = numeral(foodSum).format('0,0[.]00');
      let transportationCurrency = numeral(transportationSum).format('0,0[.]00');
      let lifestyleCurrency = numeral(lifestyleSum).format('0,0[.]00');
      let housingCurrency = numeral(housingSum).format('0,0[.]00');
      let debtCurrency = numeral(debtSum).format('0,0[.]00');
      let insuranceCurrency = numeral(insuranceSum).format('0,0[.]00');
      let savingsCurrency = numeral(savingsSum).format('0,0[.]00');

      // let foodTotal = props.budgets.reduce(function(prev, current) {
      //   return prev + +current.food
      // }, 0);
    //  {props.budgets.map(budget => {

return (
    
    <div className="card">
        <div className="card-body player">
            <div className="article">
                <h1>Money Spent This Month</h1>
                        <Row className="TotalTransaction row">  
                            <Col
                                className="col-md-6 transactionTotals">
                                <h4 className="transactionFood"> Spent on Food: ${foodCurrency}/ </h4>
                                <h4 className="transactionTransportation"> Spent on Transportation: ${transportationCurrency}</h4>
                                <h4 className="transactionLifestyle"> Spent on Lifestyle: ${lifestyleCurrency}</h4>
                                <h4 className="transactionHousing"> Spent on Housing: ${housingCurrency}</h4>
                                <h4 className="transactionDebt"> Spent on Debts: ${debtCurrency}</h4>
                                <h4 className="transactionInsurance"> Spent on Insurance: ${insuranceCurrency}</h4>
                                <h4 className="transactionSavings"> Spent on Savings: ${savingsCurrency}</h4>
                                {/* <h4> {budgets}</h4> */}
                            </Col>
                        </Row>

                    </div>
                </div>
            </div>
       
        )
     
// })
//       }
}
export default TotalTransaction;