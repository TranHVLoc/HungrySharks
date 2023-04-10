import React, { useEffect } from 'react';

import { supabase } from '../client';

import Card from '../components/Card';

import './ReadCards.css'

const ReadCards = ({ sharks, setSharks }) => {

    useEffect(() => {
        const fetchPost = async () => {
            const {data} = await supabase
                            .from('Sharks')
                            .select()
                            .order('created_at', { ascending: true })

            setSharks(data)
        }

        fetchPost()
    }, [])
    
    return (
        <div className="ReadPosts">
            {
                sharks && sharks.length > 0 ?
                    sharks.map((shark ,index) => 
                    <Card id={shark.id} name={shark.name} speed={shark.speed} type={shark.type}/>
                    )
                : <h2>{'No Shark Created Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadCards;