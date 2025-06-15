import React, { useState } from 'react';
import './App.css'

function App() {
  return (
    <div style={{height: "100vh"}}>
      <ToggleMessage />
    </div>
  )
}

// const ToggleMessage = () => {
//     const [isVisible, setIsVisible] = useState(false);

//     return (
//         <div>
//             <button onClick={() => setIsVisible(!isVisible)}>
//                 Toggle Message
//             </button>
//             {isVisible && <p>This message is conditionally rendered!</p>}
//         </div>
//     );
// };

const ToggleMessage = () => {
    const [notificationCount, setNotificationCount] = useState(false);

    function increment(){
      setNotificationCount(notificationCount + 1);
    }
    return (
        <div>
            <button onClick={increment}>
                Toggle Message
            </button>
            {notificationCount}
        </div>
    );
};


export default App
