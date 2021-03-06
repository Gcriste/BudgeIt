import React from 'react'
import {Link} from 'react-router-dom';

export function Current(props) {
    return (
        <div>
        <h3> Monthly Income </h3>
        <div>
        <div className="form-group">
        <input className="form-control" {...props} />
      </div>
      </div>
      </div>
    )
}




export function PostButton(props) {
    return (
       
        <button type="submit" 
        className="ui violet vertical animated button" tabindex = "0"
        onClick={(event) => props.handleCurrentBudgetSubmit(event)}>
              <div className = "visible content">Submit</div>
              <div className = "hidden content">
              <i className = "right arrow icon"></i>
              </div> 
          </button>
        
    )
}

