import React, { useState } from 'react';
import axios from 'axios';

function UpdateItemForm (props) {
    const [updatedItem, setUpdatedItem] = useState(    
        {
            id: props.match.params.id,
            title: '',
            director: '',
            metascore: 0,
        }
    )
    const [stars, setStars] = useState(['Kurt Russell', 'Bill Paxton', 'Sam Elliot'])
    const objectData = {...updatedItem, ...stars}

    const handleSubmit = e => {
        e.preventDefault();
        axios
          .put(`http://localhost:5000/api/movies/${props.match.params.id}`, objectData)
          .then(res => {
           console.log(res);
           props.history.push('/')
          })
          .catch(err => {console.log(err)})
          
    };
    
    const handleChange = e => {
        setUpdatedItem({
            ...updatedItem,
            [e.target.name]: e.target.value
        })
    }
    const secondHandleChange = e => {
        setStars({
            ...setStars,
            [e.target.name]: [e.target.value]
        })
    }

    return(
      <div>
        <form onSubmit={handleSubmit}> 
            <label>Title</label>
            <input  
              type="text" 
              name="title" 
              value={updatedItem.title} 
              onChange={handleChange}
            />    
            <label>Director</label>
            <input  
              type="text" 
              name="director" 
              value={updatedItem.director} 
              onChange={handleChange}
            />
            <label>Metascore</label>
            <input 
              type="number" 
              name="metascore" 
              value={updatedItem.metascore} 
              onChange={handleChange}
            />
            <label>Stars</label>
            <input 
              type="text" 
              name="stars" 
              onChange={secondHandleChange}
            />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
  
  export default UpdateItemForm;
  
