import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import SelectedBeast from './components/SelectedBeast'
import Footer from './components/Footer'
import data from './components/data.json'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component
{
  // lab 2 fix
  // lab 3 fix
  constructor(props)
    {
      super(props);
      this.state={
        data : data,
        selectedData : {},
        show : false
      }
    }
    show = (data) => {
      this.setState({
        show : true,
        selectedData : data
      }
    )}

    handleClose = () =>
    {
      this.setState({
        show : false,
      })
    
    }
  render()
  {
    return(
      <>
      <Header/>
      <Main data={this.state.data}
      show={this.show}/>
      <SelectedBeast show={this.state.show}
      data={this.state.selectedData}
      handleClose={this.handleClose}/>
      <Footer/>
      </>
    )
  }
}

export default App 