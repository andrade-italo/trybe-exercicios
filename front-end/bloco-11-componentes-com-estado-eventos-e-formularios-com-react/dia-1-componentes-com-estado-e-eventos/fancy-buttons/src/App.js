    // src/App.js
    import React from 'react';

    class App extends React.Component {
      constructor() {
        super()
        this.handleButtonOne = this.handleButtonOne.bind(this)
        this.handleButtonTwo = this.handleButtonTwo.bind(this)
        this.handleButtonThree = this.handleButtonThree.bind(this)
        this.state = {
          clicksBtnOne: 0,
          clicksBtnTwo: 0,
          clicksBtnThree: 0,
        };
      }
      
      handleButtonOne() {
        console.log('Clicou no botão 1!');
        this.setState((estadoAnterior) => ({
          clicksBtnOne: estadoAnterior.clicksBtnOne + 1
        }))
        console.log(this.getButtonColor(this.state.clicksBtnOne))
      }
  
      handleButtonTwo() {
        console.log('Clicou no botão 2!');
        this.setState((estadoAnterior) => ({
          clicksBtnTwo: estadoAnterior.clicksBtnTwo + 1
        }))
        console.log(this.getButtonColor(this.state.clicksBtnTwo))
      }
  
      handleButtonThree() {
        console.log('Clicou no botão 3!');
        this.setState((estadoAnterior) => ({
          clicksBtnThree: estadoAnterior.clicksBtnThree + 1
        }))
        console.log(this.getButtonColor(this.state.clicksBtnThree))
      }
      getButtonColor(num) {
        return num % 2 === 0 ? 'green' : 'white';
      }
      
      render() {
        const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
        return (
          <div>
            <button onClick={ this.handleButtonOne } 
            style={{ backgroundColor: this.getButtonColor(clicksBtnOne) }}>Botão {clicksBtnOne}</button>
            <button onClick={ this.handleButtonTwo } 
            style={{ backgroundColor: this.getButtonColor(clicksBtnTwo) }}>Botão {clicksBtnTwo}</button>
            <button onClick={ this.handleButtonThree } 
            style={{ backgroundColor: this.getButtonColor(clicksBtnThree) }}>Botão {clicksBtnThree}</button>
          </div>
        );
      }
    }

    export default App;