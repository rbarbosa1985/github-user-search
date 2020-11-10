import React from 'react';
import './styles.css';
import Button from '../../components/Button';

const Home = () => {

     function onHandleClick() {
          console.log('oi');
     }

     return (
          <>
               <h1>Home</h1>
               <Button title="Começar" onPress={onHandleClick}/>
          </>
     );
};

export default Home;