import React, {useState} from 'react';
import './styles.css';
import Button from '../../components/Button';
import makeRequest from '../../utils/request';
import { UserResponse } from '../../components/Types/User';
import Card from '../../components/Card';
import CardLoader from '../../components/CardLoader';

const Search = () => {
     const [name, setName] = useState('');
     const [isLoading, setIsLoading] = useState(false);
     const [user, setUser] = useState<UserResponse>();

     function handleOnChange(event: React.ChangeEvent<HTMLInputElement>){
          setName(event.target.value)
     }

     async function onHandleClick() {
          if (name === ''){
               alert('O campo nome precisa ser preenchido!');
          }else{
               setIsLoading(true);
               await makeRequest({url: `/${name}`}).then((response) => {setUser(response.data)})
               .catch(() => alert('Usuário não encontrado!'))
               .finally(() => setIsLoading(false));
          }
     }

     return (
          <>
               <div className="search-container">
                    <h1 className="search-title">Encontre um perfil Github</h1>
                    <input className="search-input" value={name} onChange={handleOnChange}></input>      
                    <Button title="Encontrar" onClick={onHandleClick}/>
               </div>
               {isLoading ? <CardLoader/>: (user && <Card user={user}/>)}
          </>
     );
};

export default Search;