import axios from 'axios';
import React, { useState } from 'react';
import Suggestion from '../SuggestionList/Suggestion';
import './Addsuggestion.css'; 

function Addsuggestion() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [data, setData] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const addSuggestion = () => {
        axios.post("http://127.0.0.1:8000/api/suggestions", {
            title: title,
            description: description
        }).then((response) => {
            setData(response.data.data);
            setTitle("");
            setDescription("");
            setSubmitted(true);
        }).catch((error) => {
            console.error(error);
        });
    };

    return (
        <div className="add-suggestion-container">
            {submitted && data ? (
                <Suggestion data={data} /> 
            ) : (
                <div className="suggestion-form">
                    <textarea 
                        className="textarea-title" 
                        required 
                        placeholder="Enter the title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                    <textarea 
                        className="textarea-description" 
                        required 
                        placeholder="Enter a short description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                    <button onClick={addSuggestion} className="button-submit">Submit</button>
                </div>
            )}
        </div>
    );
}

export default Addsuggestion;
