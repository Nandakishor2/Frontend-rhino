import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Landing.css"
import Suggestion from '../SuggestionList/Suggestion'
import Addsuggestion from '../AddSuggestion/Addsuggestion'
function Landing() {
  const [sugg,setsugg] = useState([])
  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/suggestions").catch((err)=>{
      console.error(err)
    }).then((data)=>{
      setsugg(data.data)
    })
    

  },[])
  return (
    <div className='landing1' >
      <h3 className= "desc">Add your suggestions on this sleek, user-friendly page. Simply enter a title and description, and submit your idea. Your input will be displayed instantly, showcasing your contributions in a clean and interactive format.</h3>
      <div className='landing2'>
        <div className='productimg'>
            <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/7/z/r/8-white-leaf-8-urbanbox-white-black-original-imagvgf4cuzs2hrw.jpeg?q=90&crop=false" alt="" />
        </div>
        <div className='suggestions'>
          <Addsuggestion/>
          {
            sugg.map((ele)=>(
              <Suggestion key={ele.id} data = {ele}/>
            ))
          }
            
        </div>
      </div>
      
      
    </div>
  )
}

export default Landing
