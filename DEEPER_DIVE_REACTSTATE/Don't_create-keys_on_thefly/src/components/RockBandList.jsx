import React,{useState} from 'react';
import RockBand from './RockBand';

function RockBandList() {
  const[rockBands, setRockBands]=useState([
    {name: "Queen", id:1},
    {name: "led zepll", id:2},
    {name: "The rolling", id:3},
    {name: "The beatles", id:4},
    {name: "Ac/Dc", id:5},
    {name: "Pink Floyd", id:6},
    {name: "Nirvana", id:7},
    {name: "Guns N' Roses", id:8},
    {name: "The Who", id:9},
    {name: "Metallica", id:10},
]);


function addNewRockBand(){
  console.log("add new Rock Band");

  const newRockBand={
    id:crypto.randomUUID(),
    name:"new Rock Band",
  };
  setRockBands((prev)=>[...prev,newRockBand]);

}
  return (
    <ol>
        {rockBands.map((rockBand)=>(
          <RockBand name={rockBand.name} key={rockBands.id} />
        ))}
        <button onClick={addNewRockBand}>Add New Rock Band</button>
    </ol>
  );
};

export default RockBandList;