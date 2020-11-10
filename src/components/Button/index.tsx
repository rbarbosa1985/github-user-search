import React from 'react';
import './styles.css';

type Props = {
     title: string;
     onPress: Function;
}

const Button = ({title, onPress} : Props) => {
     return (
          <button className="btn" onClick={onPress}>{title}</button>
     );
}

export default Button;