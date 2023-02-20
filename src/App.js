import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";



function App() {
  const [cartOpened,setCartOpened]=React.useState(false);
  const [items,SetItems]=React.useState([])
  const [cartItems,SetCartItems]=React.useState([])
  
  
  React.useEffect(()=>{
    fetch("https://63f32228fe3b595e2edb35f0.mockapi.io/items")
  .then(res=>{
    return res.json();
  })
  .then(json=>{
    SetItems(json);
  }
  );
  },[]);

  const onAddToCart=(obj)=>{
    if (cartItems.includes(obj)==false){
    SetCartItems(prev=>[...prev,obj])}
  }
  return (
    <div className="wrapper clear">

      {cartOpened ? <Drawer items={cartItems} onClickRemove={()=>{setCartOpened(false)}}/> : null}
      <Header onClickCart={()=>{setCartOpened(true)}}/>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все дроны</h1>
          <div className="search-block d-flex">
            <img src="img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex  cards"  >
          {items.map((obj) =>  (
              <Card 
              title={obj.title}
              price={obj.price} 
              imageUrl={obj.imageUrl}
              onFavorite={()=> {console.log('Нажали на лайк')}}
              onPlus={(obj)=> {onAddToCart(obj)}}
              />

          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
