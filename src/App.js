


function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center ">
        <div className="headerLeft d-flex align-center">
        <img height={40} width={40}  src="img/logo.png" />
        <div>
          <h3 className="text-uppercase">SlyFox Drone</h3>
          <p className="opacity-5">Магазин качественных дронов</p>
        </div>
        </div>
        
        <ul className="headerRight d-flex">
          <li className="mr-30">
          <img height={18} width={18}  src="img/cart.svg" />
            <span>1205 руб.</span>
          </li>
        <li>
        <img height={18} width={18}  src="img/user.svg" />
          
        </li>
        </ul>
      </header>
      <div className="content p-40">
          <h1 className="mb-40">Все дроны</h1>

          <div className="d-flex">
          <div className="card">
            <img height={112} width={133} src="img/drones/drone1.jpg" alt="Drones" />
            <h5>WMCH Drone</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999</b>
              </div>
              <button className="button"> 
                <img height={11} width={11} src="img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img height={112} width={133} src="img/drones/drone2.jpg" alt="Drones" />
            <h5>WMCH Drone</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999</b>
              </div>
              <button className="button"> 
                <img height={11} width={11} src="img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div><div className="card">
            <img height={112} width={133} src="img/drones/drone3.jpg" alt="Drones" />
            <h5>WMCH Drone</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999</b>
              </div>
              <button className="button"> 
                <img height={11} width={11} src="img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img height={112} width={133} src="img/drones/drone4.jpg" alt="Drones" />
            <h5>WMCH Drone</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999</b>
              </div>
              <button className="button"> 
                <img height={11} width={11} src="img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
          </div>
          
      </div>

    </div>
  );
}

export default App;
