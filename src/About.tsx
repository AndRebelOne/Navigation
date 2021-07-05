import React from 'react';
import {useHistory, useParams} from 'react-router';
import {Link} from 'react-router-dom';

export const About:React.FC = () => {
    const history = useHistory();
    const route = history.location.pathname;
    console.log(route);
    const {sectionID} = useParams<{sectionID:string}>();

    
    return(
    <>
    <h1>ABOUT</h1>
    <div>
        <p>{sectionID}</p>
        <button>
            <Link to='/contact'>
                Contact Me
            </Link>
        </button>
    </div>
    </>
    );
}