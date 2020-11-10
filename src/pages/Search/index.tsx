import React from 'react';
import './styles.css';
import Button from '../../components/Button';

const Search = () => {

     function onHandleClick() {
          console.log('oi');
     }

     return (
          <div className="search-container">
               <h1 className="search-title">Encontre um perfil Github</h1>
               <input className="search-input"></input>               
               <Button title="Encontrar" onClick={onHandleClick}/>
          </div>
     );
};

export default Search;