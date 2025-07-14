import { useEffect, useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";
import { usePrev } from "./hooks/usePrev";

//Custom hook
// function useCounter() {
//   const [count, setCount] = useState(0);

//   function increaseCount() {
//     setCount(count+1);
//   }
//   return{
//     count: count,
//     increaseCount: increaseCount
//   }
// }

// function App() {
//   const [currentPost, setCurrentPost] = useState(1);
//   const { finaldata, loading } = useFetch(
//     "https://jsonplaceholder.typicode.com/posts/" + currentPost
//   );

//   if (loading) {
//     return <div>Loading.....</div>;
//   }

//   return (
//     <div>
//       {/* <Counter />
//       <Counter />
//       <Counter />
//       <Counter /> */}
//       <button onClick={() => setCurrentPost(1)}>1</button>
//       <button onClick={() => setCurrentPost(2)}>2</button>
//       <button onClick={() => setCurrentPost(3)}>3</button>
//       {JSON.stringify(finaldata)}
//     </div>
//   );
// }

// function Counter() {
//   const {count, increaseCount} = useCounter()

//   return (
//      <div>
//       <button onClick={increaseCount}>increase {count}</button>
//      </div>
//   )
// }

//usePrev hook
//In react return statement execute first then after effect get called
function App() {
  const [state, setState] = useState(0)
  const prev = usePrev(state)

  return (
    <>
     <p>{state}</p>
     <button 
       onClick={() => {
        setState((curr) => curr+1);
       }}
     >Click me</button>
     <p>Previous value is {prev}</p>
    </>
  )
}

export default App;
