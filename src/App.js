import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import SelectedBeast from './components/SelectedBeast'
import Footer from './components/Footer'
import data from './components/data.json'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component
{
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
        data : data
      }
    )}

    handleClose = () =>
    {
      this.setState({
        show : false,
      })
    
    }
    SelectedBeast = () =>
    {
      const item = data.filter(item => {
        if(item.title===title)
        {
          return title;
        }
      }
        
      )
      this.setState({
        selectedData : item
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
      handleClose={this.handleClose}/>
      <Footer/>
      </>
    )
  }
}

export default App 