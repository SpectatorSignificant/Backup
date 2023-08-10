import { useState, createContext} from 'react';
// import { SharedContextProvider } from './SharedContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './Pages/Test';
import { UsernameProvider } from "./Provider";

function App() {
    return (
    // <div>
      <UsernameProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Test/>}/>
            <Route path="/test" element={<Test/>}/>
          </Routes>
        </BrowserRouter>
      </UsernameProvider>
    // </div> 
      )
    
//   return (
//     <Router>
//       {/* <SharedContextProvider> */}
//         <Routes>
//           <Route path="/test" component={Test} />

//         </Routes>
//       {/* </SharedContextProvider> */}
//     </Router>
//   );
}

export default App;