import React from 'react';
import '../App.css';

export default function TextComponent({ name,
                                        linkedIn,
                                        portfolio,
                                        gitHub,
                                        youtube}) {
    return (
        <>
            <p>{name}</p>
            <p>{linkedIn}</p>
            <p>{portfolio}</p>
            <p>{gitHub}</p>
            <p>{youtube}</p>
        </>
    );
}
