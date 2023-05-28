import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank.jsx'
import ParticlesBg from 'particles-bg';
import React, { Component } from 'react';
import Clarifai from 'clarifai'

window.process = {}

const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_API_KEY
})

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
    }
  }

  onInputChange = (e) => {
    console.log(e.target.value);
  }

  onButtonSubmit = () => {
    console.log('click')
    app.models.predict('face-detection', "https://samples.clarifai.com/face-det.jpg").then(
      function(response) {
        // do something with response
        console.log(response)
      },
      function(err) {
        // there was an error
      }
    )
  }

  render() {
    return (
      <div className="App">
        <ParticlesBg type="circle" bg={true} params={particlesOptions}/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
         onInputChange={this.onInputChange}
         onButtonSubmit={this.onButtonSubmit}
        />
        {/* <FaceRecognition /> */}
      </div>
    )
  }
}

export default App;
