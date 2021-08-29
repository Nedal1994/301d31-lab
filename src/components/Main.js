import React from 'react'
import HornedBeast from './HornedBeast'
import HornedBeast1 from './HornedBeast1'
import HornedBeast2 from './HornedBeast2'


class Main extends React.Component
{
  render()
  {
    return(
      <>
      <main>
          <HornedBeast></HornedBeast>
          <HornedBeast1></HornedBeast1>
          <HornedBeast2></HornedBeast2>
      </main>
      </>
    )
  }
}

export default Main