import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr=[
  {title:"Дрон дронов 1", price: 12333, imageUrl: "img/drones/drone1.jpg"},
  {title:"Дрон дронов 2", price: 15600, imageUrl: "img/drones/drone2.jpg"},
  {title:"Дрон дронов 3", price: 1488, imageUrl: "img/drones/drone3.jpg"}
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все дроны</h1>
          <div className="search-block d-flex">
            <img src="img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex  cards"  >
          {arr.map((obj) =>  (
              <Card 
              title={obj.title}
              price={obj.price} 
              imageUrl={obj.imageUrl}
              />

          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
