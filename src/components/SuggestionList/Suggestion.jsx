import React, { useEffect, useState } from 'react'
import './Suggestion.css'  // Create and import a CSS file for styling
import axios from 'axios'

function Suggestion({ data }) {
    const [vote, setvote] = useState(data.vote)
    function voteadd() {

        axios.get("http://127.0.0.1:8000/api/suggestions/" + String(data.id) + "/vote").then((data) => {
            setvote(data.data.vote)
        }).catch((error) => {
            console.error(error)
        })

    }
    return (
        <div className="suggestion-card">
            <h2 className="suggestion-title">{data.id} : {data.title}</h2>
            <p className="suggestion-description">{data.description}</p>
            <div className='buttonvote'>
                <div className="suggestion-vote">Votes: {vote}</div>
                <button className="button-37" onClick={voteadd} role="button">I Vote For This</button>
            </div>

        </div>
    )
}

export default Suggestion
