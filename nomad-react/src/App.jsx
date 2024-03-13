import React, { useState } from 'react';

function App() {
  const [toDo , setToDo] = useState("");
  const [toDos , setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  console.log(toDo);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos(current=>[toDo, ...current]);
    setToDo("")
  };
  console.log(toDos);

  return (
    <div>
      <h1>나의 할일 ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
      <input onChange={onChange} value={toDo} type="text" placeholder='Write here' />
      <button >Add to do</button>
      </form>
      <hr />
      <ul>
    {toDos.map((item,index)=>(
      <li key={index}>{item}</li>
    ))}
    </ul>
    </div>
  );
}

export default App;