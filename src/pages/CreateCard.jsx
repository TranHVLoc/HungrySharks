import React, { useState } from 'react';
import { supabase } from '../client';

import './CreateCard.css'

const CreateCard = ({ sharks, setSharks }) => {

    console.log("sharks in createpost: ", sharks)

    const handleForm = async (event) => {
        // Prevent the default from submission behaviour, which could cause the page to reload
        // or navigate to a new URL
        event.preventDefault()
        try {
            const { data, error } = await supabase
                .from('Sharks')
                .insert({ name: sharks.name, speed: sharks.speed, type: sharks.type })
                .select()
            if (error) {
                throw error
            }

            // Redirect the user to the homepage after the form has been submitted
            window.location = "/display"
        } catch (error) {
            console.error('Error creating post: ', error.message)
        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setSharks({ ...sharks, [name]: value })
    }

    return (
        <div>
            <form onSubmit={handleForm}>
                <label htmlFor="name">Shark's Name</label><br />
                <input type="text" id="name" name="name" value={sharks.name} onChange={handleInputChange} /><br />
                <br />

                <label htmlFor="speed">Speed (mph)</label><br />
                <input type="number" id="speed" name="speed" value={sharks.speed} onChange={handleInputChange} /><br />
                <br />

                {/* <label htmlFor="type">Type</label><br />
                <textarea rows="5" cols="50" id="type" name="type" value={sharks.type} onChange={handleInputChange} >
                </textarea> */}
                <label htmlFor="type">Type</label>
                <select id="type" name = "type" value={sharks.type} onChange={handleInputChange}>
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
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreateCard