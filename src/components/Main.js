import React from 'react'
import HornedBeast from './components/HornedBeast'
import uniwhal from './assets/uniwhal.jpg'
import rhino from './assets/rhino.jpg'
import unicornhead from './assets/unicorn-head.jpg'



class Main extends React.Component
{
  render()
  {
    return(
      <>
      <main>
          <HornedBeast name='uniWhal' imgUrl={uniwhal}/>
          <HornedBeast name='rhino' imgUrl={rhino}/>
          <HornedBeast name='unicorn head' imgUrl={unicornhead}/>
      </main>
      </>
    )
  }
}

export default Main