import React from 'react'
import HornedBeast from './components/HornedBeast'
import data from '../assets/data.json'

class Main extends React.Component
{
  render() {
    return (
      <div >
        {data.map(item=>{
          return(
            <HornedBeast  name={item.title} imgUrl={item.image_url}  />
          );
        })}

      </div>
    );
  }

}

export default Main