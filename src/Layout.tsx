import React, {useEffect, useState} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {Navigation} from './Navigation';

import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import { useRef } from 'react';



export const Layout: React.FC = () => {
    const refElement = useRef<HTMLDivElement>(null);
    const [scrolled, setScroll] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            if(refElement.current !== undefined){
                if(refElement!.current!.getBoundingClientRect().top < -100){
                    setScroll(true);
                    console.log("se paso");
                }else{
                    setScroll(false);
                }
            }
            
        }
        window.addEventListener('scroll', handleScroll);

        return() => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [refElement, setScroll]);
    return (
        <>
        <div ref={refElement}>
        <Navigation/>
        </div>
        <p>Scrolled: {scrolled}</p>

        <Switch>

        <Route exact path="/">
            <Home/>
        </Route>

        <Route path="/about-old">
            <Redirect to='/about'/>
        </Route>

        <Route exact path="/about/:sectionID">
            <About/>
        </Route>

        <Route exact path="/contact">
            <Contact/>
        </Route>

        </Switch>
        </>
    );
};