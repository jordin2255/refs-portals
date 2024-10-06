import {useState, useRef} from 'react';
export default function Player() {
  const playerName=useRef();
  const [inputPlayerName,setinputPlayerName]=useState(null);
  function handleClick(){
    setinputPlayerName(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {inputPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
