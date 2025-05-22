import "./App.css";
import { useShallow } from "zustand/shallow";
import { useCounterStore } from "./store/counterStore";
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    getPost();
  },[])
  // const title= useCounterStore((state)=>state.title) //obtener un solo valor del estado
  const {getPost}= useCounterStore();
  const data = useCounterStore(useShallow((state) => state)); //obtener un objeto , evitando renderizados
  return (
    <>
      Hello Word
      <h1>{data.title}</h1>
      <h1>{data.count}</h1>
      <button
        onClick={() => {
          data.increment(1);
        }}
      >
        SUMAR 1
      </button>
      <button
        onClick={() => {
          data.decrement(1);
        }}
      >
        RESTAR 1
      </button>

      <p>
        {JSON.stringify(data.posts)}
      </p>
    </>
  );
}

export default App;
