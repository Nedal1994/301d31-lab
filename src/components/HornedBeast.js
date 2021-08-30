import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

class HornedBeast extends React.Component {
  render() {
    constructor(props)
    {
      super(props);
      this.state={
        numberOfVotes:0
      }
    }

    incrementVotes = () =>
    {
      this.setState(
        {
          numberOfVotes : this.state.numberOfVotes + 1
        }
      )
    }

    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.imgUrl} onClick={this.incrementVotes} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
              Number of votes: {this.state.numberOfVotes}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        
        {/* <div>
          <h2>Unicorn</h2>
          <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600
          /Unicorn_and_Narwhal_by_dinglehopper.jpg"></img>
          <br></br><p>A unicorn and a narwhal nuzzling their horns</p>
        </div>
        <div>
          <h2>Rhino Family</h2>
          <img src="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5
          &ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format
          &fit=crop&w=1825&q=80"></img>
          <br></br><p>A Mother (or father) rhino with two babies</p>
        </div>
        <div>
          <h2>Unicorn Head</h2>
          <img src="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"></img>
          <br></br><p>Someone wearing a creepy unicorn head mask</p>
        </div>
        <div>
          <h2>Unilego</h2>
          <img src="https://images.unsplash.com/photo-1518946222227-364f22132616?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4836a6fca62e7dce9324346bacfde085&auto=format&fit=crop&w=2534&q=80"></img>
          <br></br><p>Lego figurine dressed in a unicorn outfit</p>
        </div>
        <div>
          <h2>Basically a unicorn</h2>
          <img src="https://i.pinimg.com/736x/b4/61/06/b46106830b841017ea59870b27ec18dc--narwhals-a-unicorn.jpg"></img>
          <br></br><p>A narwhal is basically a unicorn after all, right?</p>
        </div>
        <div>
          <h2>#truth</h2>
          <img src="https://i.pinimg.com/originals/16/cf/2a/16cf2a0b3fd51b9bee08bb6296193b75.jpg"></img>
          <br></br><p>The truth behind narwhals</p>
        </div>
        <div>
          <h2>Baby rhino</h2>
          <img src="https://secure.img1-ag.wfcdn.com/im/17007094/resize-h800%5Ecompr-r85/3589/35892451/Baby+Rhino+Figurine.jpg"></img>
          <br></br><p>This is actually a figurine but it looks kinda real</p>
        </div>
        <div>
          <h2>Cera</h2>
          <img src="https://vignette.wikia.nocookie.net/landbeforetime/images/c/c3/Cera_infobox.png/revision/latest?cb=20180422005003"></img>
          <br></br><p>Three horns but still, horns. And who doesn't like The Land Before Time?</p>
        </div>
        <div>
          <h2>Narwhal costume</h2>
          <img src="https://ae01.alicdn.com/kf/HTB18GwSQVXXXXaZaXXXq6xXFXXXh/Animal-Cosplay-Costume-Narwhal-Onesie-Mens-Womens-Cartoon-Whale-Pajamas.jpg"></img>
          <br></br><p>A woman wearing a blue narwhal costume</p>
        </div>
        <div>
          <h2>Rhino costume</h2>
          <img src="https://www.shopmascot.com/image/cache/mascotnew/new196-800x800.jpg"></img>
          <br></br><p>Mascots have to get their costumes somewhere</p>
        </div>
        <div>
          <h2>Believe</h2>
          <img src="https://www.tinselbox.com/wp-content/uploads/2018/03/I-BELIEVE-IN-UNICORNS-FREE-PRINTABLE-WATERCOLOR-7-of-1.jpg"></img>
          <br></br><p>I believe in unicorns, do you?</p>
        </div>
        <div>
          <h2>Markhor</h2>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg/220px-Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg"></img>
          <br></br><p>These wild goats eat snakes, then secrete a foam that locals fight over for the antivemon properties -- how cool is that?</p>
        </div>
        <div>
          <h2>Baby Markhor</h2>
          <img src="http://www.zooborns.com/.a/6a010535647bf3970b0223c84d5959200c-800wi"></img>
          <br></br><p>Even the babies are adorable</p>
        </div>
        <div>
          <h2>Mouflon</h2>
          <img src="https://images.unsplash.com/photo-1558560063-931ca9822a0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"></img>
          <br></br><p>Those horns though</p>
        </div>
        <div>
          <h2>Addax</h2>
          <img src="https://images.unsplash.com/photo-1556890077-020ec300d5db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"></img>
          <br></br><p>This guy is basically extinct but survives well in captivity, so they're frequently found in zoos</p>
        </div>
        <div>
          <h2>Baby Mouflon</h2>
          <img src="https://cbsnews3.cbsistatic.com/hub/i/r/2013/03/05/5b414225-a645-11e2-a3f0-029118418759/thumbnail/620x350/2d4cf24685b45c22912e64d2004fec8d/Baby_Mouflon_Wild_Sheep.jpg"></img>
          <br></br><p>The cuteness that is a baby mouflon asleep</p>
        </div>
        <div>
          <h2>Happy Jackson's Chameleon</h2>
          <img src="https://images.unsplash.com/photo-1514036783265-fba9577fc473?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"></img>
          <br></br><p>These are really common in Hawaii</p>
        </div>
        <div>
          <h2>Serious Jackson's Chameleon</h2>
          <img src="https://imgc.allpostersimages.com/img/print/posters/dlillc-jackson-s-chameleon_a-G-13448768-14258384.jpg"></img>
          <br></br><p>This one is very serious</p>
        </div>
        <div>
          <h2>Horned lizard</h2>
          <img src="https://www.nps.gov/band/learn/nature/images/short-horned-lizard-open-mouth-18.jpg?maxwidth=650&autorotate=false"></img>
          <br></br><p>Fave food: ants</p>
        </div>
        <div>
          <h2>Smaug</h2>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg"></img>
          <br></br><p>Fan illustration of Smaug from 'The Hobbit</p>
        </div> */}
      </>
    )
  }
}

export default HornedBeast