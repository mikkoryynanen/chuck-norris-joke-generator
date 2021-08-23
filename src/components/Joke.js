import { useState, useEffect } from 'react';
import '../styles/Joke.css'

import LoadingIcon from '../components/LoadingIcon'

import axios from 'axios'

import { RANDOM_JOKE, RANDOM_JOKE_NON_EXPLICIT } from '../config'

const Joke = () => {
    const [joke, setJoke] = useState('');
    const [showExplicit, setShowExplicit] = useState(false);

    const fetchJoke = async () => {
        const res = await axios.get(showExplicit ? RANDOM_JOKE : RANDOM_JOKE_NON_EXPLICIT);
        const data = res.data.value.joke.replace(/&quot;/g,'"')
        setJoke(res.data.value.joke);
    }

    useEffect(() => {
        fetchJoke();
    }, [setJoke]);

    const onShowExplicitChange = (ev) => {
        setShowExplicit(ev.target.checked);
    }
    
    return (
            <>
            <div className="joke-container">
                {joke === ""
                    ? <LoadingIcon />
                    : <h1 className='joke'>{joke}</h1>                   
                }
            </div>
            <br />
            <input type="checkbox" onChange={e => onShowExplicitChange(e)} /><span> Show explicit content</span>                    
            <br />
            <br />
            <button className='new-joke-button'
                    onClick={() => { fetchJoke(); }}
                >Generate new joke</button>
            </>
        )

}

export default Joke;