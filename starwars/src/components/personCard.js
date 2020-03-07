import React from "react";
import { Table } from 'reactstrap';


const PersonCard = (props) =>{
  return (
    <Table dark>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Hair Color</th>
          <th>Skin Color</th>
          <th>Eye Color</th>
          <th>Birth Year</th>
          <th>Gender</th>
          <th>Film Count</th>
          <th>Starships Owned</th>
        </tr>
      </thead>
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
    </Table>
  );
}

export default PersonCard