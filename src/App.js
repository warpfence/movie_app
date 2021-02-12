import React from "react";

function Potato({ fav }) {
  return <h3>I Love { fav }</h3>;
}

const iLove = [
  {
    name = "a"
  },
  {
    name = "b"
  },
  {
    name = "c"
  },
  {
    name = "d"
  }
]
  
}

function App() {
  return (
    <div>
      <h1>Hellow!!</h1>
      {iLove.map(object => (
        <Potato name={object.name}/>
      ))}
    </div>
  );
}

export default App;