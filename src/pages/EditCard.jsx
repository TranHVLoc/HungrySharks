import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { supabase } from '../client';

import './EditCard.css'

const EditCard = ({ sharks, setSharks }) => {

    console.log("sharks in edit", sharks)

    const {id} = useParams();
    const [editedShark, setEditedShark] = useState(sharks.filter(item => item.id == id)[0]);

    console.log("chosen", editedShark)

    // Function to handle any edited post
    const updatePost = async (event) => {
        // Prevent the default behaviour of the web application after submitting the form
        event.preventDefault()

        await supabase
            .from('Sharks')
            .update({ name: editedShark.name, speed: editedShark.speed, type: editedShark.type })
            .eq('id', id)

        window.location = "/"
    }

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setEditedShark({ ...editedShark, [name]: value })
    }

    const deletePost = async (event) => {
        event.preventDefault()

        await supabase
            .from('Sharks')
            .delete()
            .eq('id', id)

        window.location = "/display"
    }

    return (
        <div>
            <form onSubmit={updatePost}>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" value={editedShark.name} onChange={handleInputChange}/><br />
                <br/>

                <label htmlFor="speed">Speed (mph)</label><br />
                <input type="number" id="speed" name="speed" value={editedShark.speed} onChange={handleInputChange}/><br />
                <br/>

                {/* <label htmlFor="type">Type</label><br />
                <textarea rows="5" cols="50" id="type" name="type" defaultValue={editedShark.type} onChange={handleInputChange}>
                </textarea> */}
                <label htmlFor="type">Type</label>
                <select id="type" name = "type" value={editedShark.type} onChange={handleInputChange}>
                    <option value="">Select a shark</option>
                    <option value="great-white">Greate White Shark</option>
                    <option value="blue">Blue Shark</option>
                    <option value="basking">Basking Shark</option>
                    <option value="hammered-head">Hammered Head Shark</option>
                    <option value="mako">Mako Shark</option>
                    <option value="megamouth">Megamouth Shark</option>
                    <option value="sand">Sand Shark</option>
                    <option value="whale">Whale Shark</option>
                    <option value="whitetip-reef">Whitetip Reef Shark</option>
                </select>
                <br/>
                <input type="submit" value="Submit" />
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditCard