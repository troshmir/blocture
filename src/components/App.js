import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      buffer: null
    };
  }

  captureFile = (event) => {
    event.preventDefault()
    //process file for IPFS...
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.anloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log("Submitting the form..")
  }

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
                  <form onSubmit={this.onSubmit}>
                    <table>
                      <div class='content'>
                        <h2>Content hochladen</h2>
                      </div>


                      <br />
                      <tr>
                        <input type='file' onChange={this.captureFile} />
                        <br />
                      </tr>
                      <br /><br />
                      <tr>
                        <a> Beschreibung:  </a>
                        <input type='comment' />
                        <br /><br /><br /><br />
                      </tr>
                      <input type='submit' />
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
