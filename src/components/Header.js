

function Header(){
    return (
        <header className="d-flex justify-between align-center ">
        <div className="headerLeft d-flex align-center">
        <img height={40} width={40}  src="img/logo.png" alt="Logotype" />
        <div>
          <h3 className="text-uppercase">SlyFox Drone</h3>
          <p className="opacity-5">Магазин качественных дронов</p>
        </div>
        </div>
        
        <ul className="headerRight d-flex">
          <li className="mr-30">
          <img height={18} width={18}  src="img/cart.svg" alt="Cart"/>
            <span>1205 руб.</span>
          </li>
        <li>
        <img height={18} width={18}  src="img/user.svg"  alt="User"/>
          
        </li>
        </ul>
      </header>
    );
}

export default Header;