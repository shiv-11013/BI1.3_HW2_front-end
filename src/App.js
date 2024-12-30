// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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

import "./App.css";
import AddHotelForm from "./components/AddHotelForm";
import Hotels from "./components/Hotels";
import NewHotel1 from "./components/NewHotel1";

export default function App() {
  return (
    <main>
      <AddHotelForm />
      <Hotels />
      <NewHotel1 hotelName="New Hotel 1" />
    </main>
  );
}
