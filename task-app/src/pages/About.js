import React from 'react';


function About() {
    return (
        // React fragments are basically ghost elements
        // if you dont want to return a dom element
        <React.Fragment>
            <h1>About</h1>
            <p>Hi hi, I made this app to learn, cheers!</p>
        </React.Fragment>
    )
}

export default About;