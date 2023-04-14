
import React, { useEffect, useState} from 'react'
import {useHistory, useParams, Link} from "react-router-dom"
import "./AddEdit.css"
import axios from 'axios'
import { toast } from 'react-toastify';

const initialState = {
    name: "",
    email: "",
    contact: "",
}

const AddEdit = () => {

    const [state, setState] = useState(initialState);

    const {name, email, contact} = state;

    const history = useHistory;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !contact) {
            toast.error("Please fill the field")
        } else {
            axios.post("localhost:8800/api/post", {
                name,
                email,
                contact
            }).then(()=> {
                setState({name:"", email:"", contact:""})
            }).catch((err) => toast.error(err.response.data));
            // setTimeout(() =>  history.push("/"), 500);
        }
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({...state, [name]:value})
    }

    return (
    <div style={{marginTop:"100px"}}>
        <form style={{
            margin:"auto",
            padding:"15px",
            maxWidth:"400px",
            alignContent:"center"
        }}
        onSubmit={handleSubmit}
        >
            <label htmlFor="name">Name</label>
            <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder='Your Name...'
            value={name}
            onChange={handleInputChange}
            />

            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder='Your EMail...'
            value={email}
            onChange={handleInputChange}
            />

            <label htmlFor="contact">Contact</label>
            <input 
            type="number" 
            name="contact" 
            id="contact" 
            placeholder='Your Contact...'
            value={contact}
            onChange={handleInputChange}
            />

            <input type="submit" value="Save" />
        </form>
    </div>
  )
}

export default AddEdit