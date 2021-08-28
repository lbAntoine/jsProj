import React, {Component} from 'react';
// import logo from './logo.svg';
import './home.css';

class HomePage extends Component {

    constructor(props) {
        super(props)
        console.log(props)

        this.renderTeams = this.renderTeams.bind(this);
    }


    renderTeams() {

        var team_renders = [];

        this.props.teams.map (function (team) {
            team_renders.push(
                <p>{team.name}</p>
            )
        });

        return team_renders;

    }


    render () {
        return (
            <div className="home-page container">
                <h1 className="text-center home-title">Welcome to the Home Page</h1>

                {this.renderTeams()}

            </div>
          );
    }
}

export default HomePage;
