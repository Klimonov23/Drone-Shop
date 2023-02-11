import styles from './Card.module.scss'

function Card(props){
  const onClickButton=()=>{
      alert(props.title)
  }
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
            <img src="img/unliked.svg" alt="Unliked" />
            </div>
            <img height={112} width={133} src={props.imageUrl} alt="Drones" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>{props.price} руб.</b>
              </div>
              <button className="button" onClick={onClickButton}> 
                <img height={11} width={11} src="img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
    );
}

export default Card;