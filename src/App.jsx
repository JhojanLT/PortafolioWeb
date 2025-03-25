import SideNav from './components/SideNav/SideNav';
import Album from './components/Album/Album';
import './App.css';
import { useState } from 'react';

function App() {
  const portrait = Array.from({ length: 73 }, (_, i) => `./images/portrait/foto (${i + 1}).jpg`);
  const landscape = Array.from({ length: 44 }, (_, i) => `./images/landscape/foto (${i + 1}).jpg`);
  const urban = Array.from({ length: 33 }, (_, i) => `./images/urban/foto (${i + 1}).jpg`);
  const [category, setCategory] = useState(portrait);

  // En React el estado solo puede ser modificado en el componente donde se creó
  // por eso creamos la funcion toggleRute para modificar su estado
  const toggleCategory = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div className='app-container'>
      <SideNav
        className='side-nav'
        changeCategory={toggleCategory}
        categories={{ portrait, landscape, urban }}
      />
      <Album category={category} className='album' />
    </div>
  );
}

export default App;
