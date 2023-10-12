import Navbar from './component/Navbar';
import './App.css';
import Login from './component/Login';
import { Card, CardBody } from 'reactstrap';

function App() {
  return (
    <div >
      <Card className='whiteCard'>
        <Navbar></Navbar>
        </Card>
        <Login></Login>
      
      



    </div>
  );
}

export default App;
