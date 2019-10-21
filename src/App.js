import React from 'react';
import MyNavbar from "./MyNavbar"

function App(props) {
  return (
  <div>
    <MyNavbar/>
    <h1>gg</h1>
    {console.log("inside the app",props.eid)  }
  </div>
  );
}

export default App;
