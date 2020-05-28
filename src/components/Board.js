import React from 'react';
import Square from './Square';

const  Board = ({squares,onClick}) =>(
  <div className="board">
      {squares.map((item,i)=>(
          <Square key={i} value={item} onClick={()=>onClick(i)} />
      ))}

  </div>
)

export default Board;
