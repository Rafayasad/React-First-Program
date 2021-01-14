import React from 'react';
import Header from './components/Header'
import BasicTextFields from './components/Textfield'
import ContainedButtons from './components/Button'
import './App.css'

class Form extends React.Component{
  render(){
    return(
      <div>
        <form>
          <fieldset>
            <legend>Google</legend>
            <BasicTextFields />
          </fieldset>
        </form>
      </div>
    )
  }
}


class App extends React.Component{
render(){
    return(
      <div className="mainhead">
        <Header />
        <Form />
        <ContainedButtons />
        </div>

  )
}
}

export default App;
