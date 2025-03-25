import './Card.css';
function Card(props) {
  return (
    <div className='container'>
      <img src={props.image} alt='Photography' className='image' />
    </div>
  );
}

export default Card;
