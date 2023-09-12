
import { Link, Outlet } from 'react-router-dom';
import './App.css';
function App() {
  return (

    <div className='Common'>
      <div>
      <Link to="/">welcome</Link><br></br>
      <Link to="/maruthi">country</Link>
     </div>
     <Outlet></Outlet>
     </div>
   );
   
 }
 
 export default App;
