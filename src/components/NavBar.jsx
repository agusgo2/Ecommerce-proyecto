import React from 'react';
import CartWidget from './CartWidget';
import '../styles/NavBar.css'; 

function NavBar() {
  return (
    <nav>
       
      <h1>Mi E-Commerce</h1>
      <ul>
        <li><a href="">Inicio</a></li>
        <li className="dropdown">
          <a href="">Productos</a>
          <div className="dropdown-content">
            <a href="">Categoría 1</a>
            <a href="">Categoría 2</a>
            <a href="">Categoría 3</a>
          </div>
        </li>
        <li><a href="">Contacto</a></li>
      </ul>

      <CartWidget /> 
      
    </nav>
  );
}

export default NavBar;