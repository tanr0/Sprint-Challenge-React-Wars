import React from "react";
import { Table } from 'reactstrap';


const PersonCard = (props) =>{
  return (
      
        <tr>
          <th scope="row">{props.name}</th>
          <td>{props.height}</td>
          <td>{props.mass}</td>
          <td>{props.hairColor}</td>
          <td>{props.skinColor}</td>
          <td>{props.eyeColor}</td>
          <td>{props.birthYear}</td>
          <td>{props.gender}</td>
          <td>{props.films}</td>
          <td>{props.starships}</td>
        </tr>
    
  );
}

export default PersonCard