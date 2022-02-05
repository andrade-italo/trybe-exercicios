import './App.css';
import React from 'react' 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      api: '',
    };

    this.changeDataJson = this.changeDataJson.bind(this);
  }
  
  async componentDidMount() {
      const url = ` https://api.randomuser.me/`;
      const response = await fetch(url);
      const dataJson = await response.json();
      this.changeDataJson(dataJson.results[0]);
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const { age } = nextState.api.dob
    const max = 50;

    return age <= max;
  }


  changeDataJson(dataJson) {
    this.setState({ api: dataJson });
  }
  
  render() {
    const { api } = this.state;
    const { name, dob, email, picture } = api

    if (!api) return <p>Loading...</p>;

    const card = (
      <div className="d-flex h-100 flex-column justify-content-center align-items-center">
        <h1>{ name.first }</h1>
        <span>{ email }</span>
        <img className="myPicture" src={ picture.large } alt="Avatar" />
        <p>{ dob.age }</p>
      </div>
    );

    return (
      <div className="git d-flex flex-column justify-content-center align-items-center">
        { card }
      </div>
    );
  }
}

export default App;
