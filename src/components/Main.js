import React from 'react'
import HornedBeast from './HornedBeast'
import data from './data.json'

class Main extends React.Component
{
  render() {
    return (
    <div >
        {this.props.data.map(item=>{
          return(
            <HornedBeast 
            name={item.title}
            imgUrl={item.image_url}
            description={item.description}  
            showModel={this.props.show}
            data={item}
            formSelect={this.props.formSelect}
            />
          );
        })}
      </div>
    );
  }
}
export default Main