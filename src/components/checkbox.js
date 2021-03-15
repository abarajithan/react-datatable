import React from 'react';

function Checkbox(props){
    return(
        <div className={`column`} style={{width: "70px"}}>
            <label>
                <input onChange={props.handleChange} checked={props.checked} type="checkbox" /> 
                {props.label}
            </label>
        </div>    
    )
}
export default React.memo(Checkbox);
