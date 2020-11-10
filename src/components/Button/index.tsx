import React from 'react';
import './styles.css';

type Props = {
     title: string;
     onClick?: Function;
}

const Button = ({title, onClick} : Props) => {
     return (
          <button className="btn" onClick={() => onClick}>{title}</button>
     );
}

export default Button;