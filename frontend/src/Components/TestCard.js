import '../styles/components_styles/TestCard.css'

/*
TestCard is a component used to test moving a figma component I made into react and css
*/

export default function TestCard() {
  return (
    <div className="cardContainer">
      <div className="text">
        <h3 className="cardText">Card Heading</h3>
        <p className='cardText'>This is the text box of some kind of card component</p>
      </div>
      <img src = "https://via.placeholder.com/155x155" className='cardImg'></img>
    </div>
  );
}
