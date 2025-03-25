import Card from '../Card/Card';
import './Album.css';

function Album(props) {
  return (
    <div className='album'>
      {props.category.map((img, i) => (
        <Card key={i} image={img} />
      ))}
    </div>
  );
}

export default Album;
