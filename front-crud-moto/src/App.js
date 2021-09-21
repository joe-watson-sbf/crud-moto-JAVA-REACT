import Moto from "./components/Moto/Moto";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Guardar from "./components/Moto/Registro/Guardar";
import Header from "./components/Header/Header";

function App() {
  return (

    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path='/' exact component={Moto}/>
        <Route path='/save' exact component={Guardar} />
        <Route path='/actualizar' exact render = {()=> <h1>ACTUALIZAR MOTO</h1>} />
        <Route component={Moto}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
