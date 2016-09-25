import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    rende() {
        return (
            <div className="jumbotron">
                <h1>
                    Adiministration
                </h1>
                <p>
                    React web app.
                </p>
            </div>
        );
    }
}

export default HomePage;