import { Link } from 'react-router-dom'

import CRUDRoutes from './components/routes/CRUDRoutes';

function App() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light mb-3'>
        <Link to='/' className='navbar-brand' style={{ paddingLeft: 10 }}>CRUD</Link>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>Home</Link>
          </li>
          <li className='nav-item dropdown'>
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Estudante
            </a>
            <ul className="dropdown-menu dropdown-menu-light">
              <li>
                <Link className="dropdown-item" to='/student/create'>Criar estudante</Link>
              </li>
              <li>
                <Link className="dropdown-item" to='/student/list'>Listar estudante</Link>
              </li>
            </ul>
          </li>
          <li className='nav-item dropdown'>
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Professor
            </a>
            <ul className="dropdown-menu dropdown-menu-light">
              <li>
                <Link className="dropdown-item" to='/teacher/create'>Criar professor</Link>
              </li>
              <li>
                <Link className="dropdown-item" to='/teacher/list'>Listar professor</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className='container'><CRUDRoutes /></div>
    </>
  );
}

export default App;
