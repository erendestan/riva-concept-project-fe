import React from 'react'

export default function Filter(props){
    const {setIsActive} = props;

    const handleChange = (e) =>{
        e.preventDefault();
        let active = true;
        if(e.target.value === "false"){
            active = false;
        }

        setIsActive(active);
    }
    
    return(
        <div>
        <label htmlFor="position">Filter:</label>
        <select className='mx-2'
        id="position"
        onChange={handleChange }
        >
        <option value="true">Active</option>
        <option value="false">InActive</option>
        </select>
    </div>
    )
}