// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   // npx create-react-app your-app-name --template typescript
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { authStore } from "./components/pullstate/store";
import PublicRoutes from "./components/publicRoutes/PublicRoutes";
import LoggedInRoutes from "./components/loggedInRoutes/LoggedInRoutes";

function App() {
  const isLoggedIn = authStore.useState((s) => s.isLoggedIn);
  console.log(isLoggedIn, "isLoggedIn");
  if (!isLoggedIn) return <PublicRoutes />;
  return <LoggedInRoutes />;
}

export default App;
