import React from 'react'
import { Link } from 'react-router-dom'

import more from '../assets/more.png'

import './Card.css'
import SharkInfo from '../../sharks-info.json'

const Card = (props) =>  {

  return (
      <div className="Card" >
          <Link to={'/edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <h2 className="name">{props.name}</h2>
          <h3 className="speed">{"Speed: " + props.speed + " MPH"}</h3>
          <p className="type">{SharkInfo[props.type].name}</p>
          <img
            alt='shark image'
            src={SharkInfo[props.type].image}
          />
          <Link to={'/detail/' + props.id} className='toDetail'>
            <button className="betButton" >ℹ More</button>
          </Link>
      </div>
  );
};

export default Card;