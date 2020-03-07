import React from "react";
import { Table } from 'reactstrap';


const PersonCard = (props) =>{
  return (
      <tbody>
        <tr>
          <td>{props.name}</td>
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
      </tbody>
    
  );
}

export default PersonCard