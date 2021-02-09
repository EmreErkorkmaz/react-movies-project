import styles from './CardItem.module.scss'


const CardItem = (props: any) => {
    const {title, image} = props
    return (
        <div className={styles.container}>
            <img src={image} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

export default CardItem
