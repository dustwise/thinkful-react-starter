import React from 'react';
import Enemy from './enemy';

export default function(props){
  return (
    <div>
      <p>Floor #{props.currentFloor}</p>
      {props.floorStats.enemies.map((enemy, index) => <Enemy enemyStats={enemy} key={index} enemyActions={props.enemyActions}/>)}
    </div>
  );
}