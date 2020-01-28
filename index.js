import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Last name</th>
            <th>Age</th>
            <th>Sport</th>
          </tr>
          <tr>
             <td>Pickle</td>
             <td>Rick</td>
             <td>63</td>
             <td>Kill rats</td>
          </tr>
          <tr>
             <td>Joseph</td>
             <td>Smith</td>
             <td>23</td>
             <td>Soccer</td>
          </tr>
          <tr>
             <td>Pedro</td>
             <td>Péres</td>
             <td>44</td>
             <td>Basketball</td>
          </tr>
        </table>
        <div className="btn">
          <button>Sort by Name</button>
          <button>Sort by Age</button>
          <button>Sort by Sport</button>
        </div>
      </div>

    );
  }
}

render(<App />, document.getElementById('root'));
