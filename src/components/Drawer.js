function Drawer(){
    return (
        <div style={{display:"none"}} className="overlay">
        <div className="drawer">
          <h2>
            Корзина
            <img src="img/btn-remove.svg" height={30} width={30} className="remove-btn cu-p" alt="Remove"/>
            </h2>
          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
            <div style={{ backgroundImage: 'url(img/drones/drone1.jpg)'}} className="cartItemImg">
            
            </div>
            <div className="mr-20 flex">
              <p className="mb-5">Крутейшее наименование дрона</p>
              <b>12 999 руб.</b>
            </div>
            <img src="img/btn-remove.svg" height={30} width={30} className="remove-btn" alt="Remove"/>
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div style={{ backgroundImage: 'url(img/drones/drone2.jpg)'}} className="cartItemImg">
            
            </div>
            <div className="mr-20 flex">
              <p className="mb-5">Крутейшее наименование дрона</p>
              <b>12 999 руб.</b>
            </div>
            <img src="img/btn-remove.svg" height={30} width={30} className="remove-btn" alt="Remove"/>
          </div>
          
          </div>
          <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>25 998 руб</b>
            </li>
            <li>
            <span>Скидка:</span>
              <div></div>
              <b>130 руб</b>
            </li>
          </ul>
          <button className="greenButton">Оформить заказ
            <img src="img/arrow.svg" alt="Arrow"/>
          </button>
          </div>
          
        </div>
        </div>
    );
}

export default Drawer;