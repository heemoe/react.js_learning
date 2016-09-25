import {Link} from 'react-router';
import React, {Component} from 'react';

class HomePage extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Adiministration</h1>
                <p>React web app.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;