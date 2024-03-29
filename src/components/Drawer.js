function Drawer({items=[],onClickRemove}){
    return (
        <div className="overlay">
        <div className="drawer">
          <h2>
            Корзина
            <img src="img/btn-remove.svg" height={30} width={30} className="remove-btn cu-p" alt="Remove" onClick={onClickRemove}/>
            </h2>
            
          <div className="items">
            {items.map((obj)=>(
            <div className="cartItem d-flex align-center mb-20">
            <div
             style={{ backgroundImage: `url(${obj.imageUrl})` }}
              className="cartItemImg">
            </div>
            <div className="mr-20 flex">
              <p className="mb-5">{obj.title}</p>
              <b>{obj.price} руб.</b>
            </div>
            <img src="img/btn-remove.svg" height={30} width={30} className="remove-btn" alt="Remove"/>
          </div>))}
          
          
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