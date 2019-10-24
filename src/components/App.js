import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="https://github.com/troshmir/blocture"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blocture
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto"> <br /> <br />
                <a
                  href="https://github.com/troshmir/blocture"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo} className="App-logo" alt="logo" />
                </a> <br /><br />
                <h1>Blocture</h1> <br /> <br />


                <div>
                  <form>
                    <table>
                      <thead>
                        <tr>
                          <th>Content hochladen</th>
                        </tr> <br />
                      </thead>
                      <tbody>
                        <tr>
                          <input type='file' /> <br /><br />
                        </tr>
                        <tr>
                          Beschreibung:  <input type='desc' /> <br /><br /><br /><br />
                        </tr>
                        <input type='submit' />
                      </tbody>
                    </table>
                  </form>
                </div>

              </div>
            </main>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
