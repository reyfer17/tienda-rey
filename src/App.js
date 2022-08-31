import "./App.css"

const App = () => {
  return (

<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <p class="navbar-brand" href="#">TIENDA REY</p>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <p class="nav-link active" href="#">Principal
            <span class="visually-hidden">(actual)</span>
          </p>
        </li>
        <li class="nav-item">
          <p class="nav-link" href="#">Libros</p>
        </li>
        <li class="nav-item">
          <p class="nav-link" href="#">Juguetes</p>
        </li>
        <li class="nav-item">
          <p class="nav-link" href="#">Accesorios</p>
        </li>
        <li class="nav-item dropdown">
          <p class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Ropa</p>
          <div class="dropdown-menu">
            <p class="dropdown-item" href="#">Calzado</p>
            <p class="dropdown-item" href="#">Pantalones/Shorts/Calzas</p>
            <p class="dropdown-item" href="#">Remeras/Camisas/Sacos/Buzos</p>
            <div class="dropdown-divider"></div>
          </div>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="text" placeholder="Search"></input>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Busqueda</button>
      </form>
    </div>
  </div>
</nav>

  );
}

export default App;
