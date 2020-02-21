import React, { useState } from 'react';
import axios from 'axios';

function UpdateItemForm (props) {
    const [updatedItem, setUpdatedItem] = useState({
        
            id: 2,
            title: '',
            director: '',
            metascore: 0,
            stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot']
        
    })
    console.log(updatedItem);
    const handleSubmit = e => {
        e.preventDefault();
        axios
          .put(`http://localhost:5000/api/movies/${props.match.params.id}`, updatedItem)
          .then(res => {
           console.log(res);
            
            
            
            
          })
          .catch(err => {console.log(err)})
        };
    
  
        const handleChange = e => {
            setUpdatedItem({
              ...updatedItem,
              [e.target.name]: e.target.value
            })
        }
      

    // const handleArray = e => {
    //     e.preventDefault()
    //   setUpdatedItem({
    //     stars: [
    //         ...updatedItem.movie.stars,
    //         [e.target.name], e.target.value
    //     ]

            
    //     // stars: [
    //     //     ...updatedItem.movie.stars,
    //     //     {[e.target.name]: e.target.value}
    //     // ]
          
    //   });
    // };
  
     
  
     
  
     
   
      
  
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
            {/* <label>Stars</label>
            <input 
              type="text" 
              name="stars" 
              value={updatedItem.movie.stars} 
              onChange={handleChange}
            /> */}
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
  
  export default UpdateItemForm;
  
