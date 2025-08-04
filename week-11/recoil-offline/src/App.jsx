import { RecoilRoot, useRecoilValue } from "recoil";
import "./App.css";
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atoms.js";

function App() {
  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  );
}

function MainApp() {
  //Atoms 
  // const networkNotificationCount = useRecoilValue(networkAtom);
  // const jobsAtomCount = useRecoilValue(jobsAtom);
  // const notificationAtomCount = useRecoilValue(notificationAtom);
  // const messagingAtomCount = useRecoilValue(messagingAtom);

  //Selectors
  // const totalNotificationCount = useRecoilValue(totalNotificationSelector);  

  return (
    <>
      <button>Home</button>

      <button>
        My network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>jobs ({jobsAtomCount})</button>
      <button>Messages ({messagingAtomCount})</button>
      <button>Notifications ({notificationAtomCount})</button>

      <button>me</button>
    </>
  );
}

export default App;
