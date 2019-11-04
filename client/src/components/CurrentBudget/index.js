import React from 'react'

export function Current(props) {
    return (
        <div>
        <h2> Enter your monthly income </h2>
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
        className="ui primary horizontal animated button" tabindex = "0"
        onClick={(event) => props.handleCurrentBudgetSubmit(event)}>
              <div className = "visible content">Submit</div>
              <div className = "hidden content">
              <i className = "right arrow icon"></i>
              </div> 
          </button>
    )
}

