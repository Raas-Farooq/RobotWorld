import React from 'react';
import Robot from './Robot';
import robo from './robo';

const FunRobo = ({robo}) => {

  return (
      <div>
          {
          robo.map((user, i) =>{
          return (
        <Robot key={i}
        name={robo[i].name} 
        id={robo[i].id}
        email={robo[i].email} />
          );
          })
        }
      </div>
  )
}
export default FunRobo;