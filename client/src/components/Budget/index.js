import React from 'react';

export function Input(props) {


    return (
       
      <div className="form-group">
        <input className="form-control" {...props} />
      </div>

    )
  };



  export function PostButton(props) {
    return (
        <button type="submit" 
        className="ui violet vertical animated button" tabindex = "0"
        onClick={(event) => props.handleBudgetSubmit(event)}>
              <div className = "visible content">Submit</div>
              <div className = "hidden content">
              <i className = "right arrow icon"></i>
              </div> 
          </button>
    )
}
