import styles from './Card.module.scss'
import React from 'react'
function Card({onFavorite,title,imageUrl,price,onPlus}){
const [isAdded,setIsAdded]=React.useState(false); 

const onClickPlus=()=>{
  onPlus({title,imageUrl,price});
  setIsAdded(!isAdded);
}
    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
            <img src="img/unliked.svg" alt="Unliked" />
            </div>
            <img height={112} width={133} src={imageUrl} alt="Drones" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>{price} руб.</b>
              </div>
               
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "img/btn-checked.svg" : "img/btn-plus.svg" } alt="Plus"/>
              
            </div>
          </div>
    );
}

export default Card;