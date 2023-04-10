import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import './Detail.css'

import SharkInfo from '../../sharks-info.json'

const Detail = ({ sharks, setSharks }) => {

    const {id} = useParams();
    const [editedShark, setEditedShark] = useState(sharks.filter(item => item.id == id)[0]);

    return (
        <div className='Detail'>
            <h1>Shark Name: {editedShark.name}</h1>
            <h2>Speed: {editedShark.speed} mph</h2>
            <h2>Type: {SharkInfo[editedShark.type].name}</h2>

            <Link to={'/edit/'+ id}>Wanna edit this shark?</Link>
        </div>
    )
}

export default Detail