import React, { Component } from 'react';
import './style.css';
import Tabletop from 'tabletop';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: '1uqPuyeUYp0GZI2OflUHDaTFAKHX6vXiEaZeHHXTWA50',
      callback: googleData => {
        this.setState({
          data: googleData
        });
      },
      simpleSheet: true
    });
  }
  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <h1>NBA Team Leaders 2020-21</h1>
        <p>
          <i>Teams are organized by highest PPG</i>
        </p>
        <div id="team-details">
          {data.map(obj => {
            return (
              <div key={obj.teamName} class="card">
                <h2>{obj.teamName}</h2>
                <br />
                <img
                  src={obj.teamLogo}
                  style={{ width: '50%', height: 'auto' }}
                />
                <p>
                  Record: {obj.wins} - {obj.losses}
                </p>
                <br />
                <p>PPG: {obj.pointsPG}</p>
                <br />
                <p>RPG: {obj.reboundsPG}</p>
                <br />
                <p>APG: {obj.assistsPG}</p>
                <br />
                <p>FG Percentage: {obj.fgPer}</p>
                <br />
                <p>3PT Percentage: {obj.threePer}</p>
                <br />
                <p>Free Throw Per: {obj.ftPer}</p>
                <br />
                <p>
                  BPG vs Blocks Attempted Per Game: {obj.blocksPG} /{obj.blocksAttemptPG}
                </p>
                <br />
                <p>SPG: {obj.stealsPG}</p><br />
                <p>TOVPG: {obj.turnoversPG}</p><br />
                <p>PLUS-MINUS: {obj.plusMinus}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default App;
