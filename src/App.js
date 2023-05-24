import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import PatientDashboard from "./Pages/PatientDashboard/PatientDashboard";

const App = () => {
  return (
    <>
      <PatientDashboard/>
    </>
  )
}

export default App;
