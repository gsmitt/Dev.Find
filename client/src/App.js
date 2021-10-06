import './App.css';
import { Routes } from './routes/routes.jsx';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/explorar' component={Dashboard} />
          <Route path='/cadastro' component={Cadastro} />
          <Route path='/sobre' component={Sobre} />
          <Route path='/publicar-projeto' component={Publicar} />
        </Switch>
        <TypeStyles />
        <Route path='/edit-modal' component={EditModal} />
        <Route path='/perfil-usuario' component={Profile} />
        <Route path='/edit-profile' component={EditProfile} />
        <Footer />
      </Router>
    </>
    <Routes />
  );
}

export default App;