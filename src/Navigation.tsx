import React from "react";
import { Link } from 'react-router-dom';

const NavigationOptions = [
    {
        path: '/',
        label: 'Home'
    },
    {
        path: '/about',
        label: 'About'
    },
    {
        path: '/contact',
        label: 'Contact me'
    }];


export const Navigation: React.FC = () => {
    return (
    <div>
        <ul>
            {NavigationOptions.map(item => (
                <li key={item.label}>
                    <Link to={item.path}>
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
    )
}