import React from 'react';
import {useHistory} from 'react-router-dom';
import './styles.css';
import Button from '../../components/Button';

const Home = () => {
     const history = useHistory();

     function onHandleClick() {
          history.push('/search');
     }

     return (
          <div className="container">
               <h1 className="title-home">Desafio do Capítulo 3, Bootcamp DevSuperior</h1>
               <text className="text-home">Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.</text>
               <text className="text-home">Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto. </text>
               <text className="text-home">Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: antforfigma@gmail.com</text>
               <Button title="Começar" onClick={onHandleClick}/>
          </div>
     );
};

export default Home;