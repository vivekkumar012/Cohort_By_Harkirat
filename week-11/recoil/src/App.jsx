import './App.css'
import { useEffect, useState, memo } from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState,  } from 'recoil'
import { counterAtom, evenSelector } from './store/atoms/Counter.js'

// function App() {

//   return (
//     <RecoilRoot>
//       <Counter />
//     </RecoilRoot>
//   )
// }

// function Counter() {
//   return (
//     <div>
//       <CurrentCount />
//       <Increase />
//       <Decrease />
//     </div>
//   )
// }

// function CurrentCount() {
//   const count = useRecoilValue(counterAtom);

//   return(
//     <div>
//       {count}
//     </div>
//   )
// }


// function Increase() {
//   const setCount = useSetRecoilState(counterAtom);

//   function increase() {
//     setCount(c => c+1);
//   }

//   return (
//     <div>
//       <button onClick={increase}>Increase</button>
//     </div>
//   )
// }

// function Decrease() {
//   const setCount = useSetRecoilState(counterAtom);

//   function decrease() {
//     setCount(c => c-1);
//   }

//   return (
//     <div>
//       <button onClick={decrease}>Decrease</button>
//     </div>
//   )
// }

// memo uses in react
// function App() {
//   return(
//     <div>
//       <Counter />
//     </div>
//   )
// }

// const Counter = memo(function () {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setInterval(() => {
//       setCount(c => c+1)
//     }, 3000)
//   }, [])

//   return (
//     <div>
//       <CurrentCount />
//       <Increase />
//       <Decrease />
//     </div>
//   )
// })

// const CurrentCount = memo(function () {
//   return <div>1</div>
// })

// const Increase = memo(function () {
//   return (
//     <div>
//       <button>Increase</button>
//     </div>
//   )
// })

// const Decrease = memo(function () {
//   return (
//     <div>
//       <button>Decrease</button>
//     </div>
//   )
// })


function App() {
  return (
    <div>
      <RecoilRoot>
        <Counter />
        <Buttons />
        <IsEven />
      </RecoilRoot>
    </div>
  )
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom)

  function increase(){
      setCount(c => c+2);
  }
  function decrease() {
      setCount(c => c-1);
  }

  return <div>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
  </div>
}

function Counter() {
  const count = useRecoilValue(counterAtom);

  return <div>
    {count}
  </div>
}

function IsEven() {
  const even = useRecoilValue(evenSelector);
  return <div>
    {even ? "Even" : "Odd"}
  </div>
}

export default App
