import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component
{
  // lab 2
  render()
  {
    return(
      <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      </>
    )
  }
}

export default App 