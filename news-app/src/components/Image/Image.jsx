
const Image = ({ image }) => {

    return (
        <div className={StyleSheet.wrapper}>
            {image ? <img src={image} alt="news" className={styles.image} /> : null}
        </div>
    )
}

export { Image }