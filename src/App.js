import React, {  useEffect } from "react"
import './App.css';
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from "pusher";

function App() {

useEffect(() => {
  const pusher = new Pusher('fd3582e39042f7218e28', {
    cluster: 'ap2'
  });

  const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
    });

},[])

  return (
    <div className="app">
       <div className="app__body">
      <Sidebar/>
      <Chat/>

       </div>

    </div>
  );
}

export default App;
