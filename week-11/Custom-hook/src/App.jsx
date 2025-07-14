import { useEffect, useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'

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



function App() { 
  const [currentPost, setCurrentPost] = useState(1);
  const { finaldata } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);


  return (
     <div>
      {/* <Counter />
      <Counter />
      <Counter />
      <Counter /> */}
      <button onClick={() => setCurrentPost(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      <button onClick={() => setCurrentPost(3)}>3</button>
      {JSON.stringify(finaldata)}
     </div>
  )
}

// function Counter() {
//   const {count, increaseCount} = useCounter()

//   return (
//      <div>
//       <button onClick={increaseCount}>increase {count}</button>
//      </div>
//   )
// }

export default App
