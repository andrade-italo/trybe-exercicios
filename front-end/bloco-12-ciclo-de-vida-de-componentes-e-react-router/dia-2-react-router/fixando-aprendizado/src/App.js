import './App.css';
import { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
          <h1>BACANA</h1>
          <span>INCRÍVEL</span>
        </ComponentePai>
      </div>
    )
  }
}

const ComponentePai = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default App;
