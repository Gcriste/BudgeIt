import React from 'react';

export function Category(props) {
    return (
        <div className = "ui big form">
    <div className="required field">
    <select className = "ui fluid search dropdown" {...props} >
    <option value="">Pick a category</option>
          <option value="food"> Food</option>
          <option value="transportation">transportation</option>
          <option value="lifestyle">lifestyle</option>
          <option value="housing">housing</option>
          <option value="debt">debt</option>
          <option value="insurance">insurance</option>
          <option value="savings">savings</option>
            </select>
       </div>
       </div>
    )
  };

  export function Input(props) {
    return (
       <div>
        <div className="form-group">
        <input className="form-control" {...props} />
      </div>
      </div>

    )
}

export function PostButton(props) {
    return (
       
        
<button 
className="ui violet vertical animated button" tabindex ="0"
onClick={(event) => props.handlePostSubmit(event)}>
   <div className = "visible content">Enter Transaction </div>
      <div className = "hidden content">
            Yo
          </div>  
</button>


    )
  };

