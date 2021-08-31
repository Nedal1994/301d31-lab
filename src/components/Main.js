import React from 'react'
import HornedBeast from './HornedBeast'
class Main extends React.Component
{
  render() {
    return (
      <div >
        {this.props.data.map(item=>{
          return(
            <HornedBeast 
            title={item.title} 
            imgUrl={item.image_url}
            description={item.description}
            keyword={item.keyword}
            show={this.props.show} />
            
            
          );
        })}
      </div>
    );
  }

}

export default Main