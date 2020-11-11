import React from 'react';
import ImageLoader from '../Loader/ImageLoader';
import InfoLoader from '../Loader/InfoLoader';
import './styles.css';


const CardLoader = () => {
     return (
          <div className="searched-container">
                    <div className="searched-perfil">
                         <ImageLoader/>
                         <InfoLoader/>
                    </div>
               </div>
     );
}

export default CardLoader;