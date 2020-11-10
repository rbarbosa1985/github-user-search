import React, {useState} from 'react';
import './styles.css';
import Button from '../../components/Button';
import makeRequest from '../../utils/request';
import {UserResponse} from '../../components/Types/User';



const Search = () => {
     const [name, setName] = useState('');
     const [user, setUser] = useState<UserResponse>();

     function handleOnChange(event: React.ChangeEvent<HTMLInputElement>){
          setName(event.target.value)
     }

     async function onHandleClick() {
          console.log(name);
          await makeRequest({url: `/${name}`}).then((response) => {setUser(response.data)});
     }

     console.log(user);

     return (
          <>
               <div className="search-container">
                    <h1 className="search-title">Encontre um perfil Github</h1>
                    <input className="search-input" value={name} onChange={handleOnChange}></input>      
                    <button className="btn" onClick={onHandleClick}>Teste</button>         
                    <Button title="Encontrar" onClick={onHandleClick}/>
               </div>
               <div className="searched-container">
                    <div className="searched-perfil">
                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_ecc1rjpMz3CsRsiTNbbMoXg5WwmAVW2poz9EDPI_u7cd8U_oZmM1e1ScOcpD8e0ggv9xVjXQ&usqp=CAc" alt="perfil"  className="searched-image" />
                         <div className="searched-details">
                              <div className="searched-nums">
                                   <div className="searched-num"><text>Repositórios públicos:</text></div>
                                   <div className="searched-num"><text>Seguidores:</text></div>
                                   <div className="searched-num"><text>Seguindo:</text></div>
                              </div>
                              <div className="searched-info">
                                   <h1 className="title-info">Informações</h1>
                                   <div className="text-info"><text>Empresa:</text></div>
                                   <div className="text-info"><text>Website/Blog:</text></div>
                                   <div className="text-info"><text>Localidade:</text></div>
                                   <div className="text-info"><text>Membro desde:</text></div>
                              </div>
                         </div>
                    </div>
                    <Button title="Ver perfil" onClick={onHandleClick}/>
               </div>
          </>
     );
};

export default Search;