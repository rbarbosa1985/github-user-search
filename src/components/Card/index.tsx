import React from 'react';
import Button from '../Button/';
import moment from 'moment';
import './styles.css';
import {UserResponse} from '../Types/User';

type user = { 
     user : UserResponse;
}

const Card = ({ user } : user) => {
     function onHandleClick() {
          window.open(user.html_url);
     }

     const formatDate = (date: string) => {
          return moment(date).format('DD/MM/YYYY');
      }

     return (
          <div className="searched-container">
                    <div className="searched-perfil">
                         <img src={user.avatar_url} alt="perfil"  className="searched-image" />
                         <div className="searched-details">
                              <div className="searched-nums">
                                   <div className="searched-num"><text>Repositórios públicos: {user.public_repos}</text></div>
                                   <div className="searched-num"><text>Seguidores: {user.followers}</text></div>
                                   <div className="searched-num"><text>Seguindo: {user.following}</text></div>
                              </div>
                              <div className="searched-info">
                                   <h1 className="title-info">Informações</h1>
                                   <div className="text-info"><text className="text">Empresa: </text>{user.company}</div>
                                   <div className="text-info"><text className="text">Website/Blog: </text>{user.blog}</div>
                                   <div className="text-info"><text className="text">Localidade: </text>{user.location}</div>
                                   <div className="text-info"><text className="text">Membro desde: </text>{formatDate(user.created_at)}</div>
                              </div>
                         </div>
                    </div>
                    <Button title="Ver perfil" onClick={onHandleClick}/>
               </div>
     );
}

export default Card;