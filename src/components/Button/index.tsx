import React from 'react';
import './styles.css';

type Props = {
     title: string;
     onClick: Function;
}

const Button = ({title, onClick}: Props) => {
     function onHandleClick() {
          onClick();
     }
     return (
          <button className="btn" onClick={onHandleClick}>{title}</button>
     );
}

export default Button;