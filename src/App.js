import logo from './logo.svg';
import './App.css';
import { InputGroupDemo } from './primedemo/InputGroupDemo';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import Ogrenci from './obs/Ogrenci';
import Ders from './obs/Ders';
import DersNotu from './obs/DersNotu';
const items = [

  {
    label: 'Öğrenci',
    icon: 'pi pi-fw pi-align-justify',
    command: (event) => {
      window.location = "/ogrenci";
    }
  },
  {
    label: 'Ders',
    icon: 'pi pi-fw pi-book',
    command: (event) => {
      window.location = "/ders";
    }
  },
  {
    label: 'Öğrenci Notu',
    icon: 'pi pi-fw pi-chart-line',
    command: (event) => {
      window.location = "/ogrenciNotu";
    }
  }
];
function App() {
  return (
    <Router>

      <div>
        <Menubar
          model={items}
          end={<Button label="Logout" icon="pi pi-power-off" />}
        />
      </div>


      <Switch>
        <Route exact path="/">
          <div>Ana Sayfa</div>
        </Route>
        <Route exact path="/inputdemo">
          <InputGroupDemo></InputGroupDemo>
        </Route>
        <Route exact path="/ogrenci">
          <Ogrenci></Ogrenci>
        </Route>
        <Route exact path="/ders">
          <Ders></Ders>
        </Route>
        <Route exact path="/ogrenciNotu">
          <DersNotu></DersNotu>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
