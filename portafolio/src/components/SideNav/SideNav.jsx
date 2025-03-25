import './SideNav.css';
// import { useState } from 'react';

function SideNav(props) {
  // const [category, setCategory] = useState(portrait);

  // En React el estado solo puede ser modificado en el componente donde se creó
  // por eso creamos la funcion toggleRute para modificar su estado

  return (
    <>
      <div className='sideNav'>
        <p className='title'>Jhojan Infante</p>
        <img src='' />
        <ul className='nav__list'>
          <li>
            {/* Se debe crear una funcion anonima ()=>
            para que la funcion se ejecute al presionar el boton
            y no al renderizar el componente */}
            <button
              className='item'
              onClick={() => props.changeCategory(props.categories.portrait)}
            >
              Retratos
            </button>
          </li>
          <li>
            <button
              className='item'
              onClick={() => props.changeCategory(props.categories.landscape)}
            >
              Paisajes
            </button>
          </li>
          <li>
            <button className='item' onClick={() => props.changeCategory(props.categories.urban)}>
              Arquitectura
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideNav;
