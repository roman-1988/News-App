import styles from "./styles.module.css"

const Preloader = ({ count = 1, type = "banner" }) => {

    return (
        <>
            {count > 1 ? (
                <ul>{[Array(count)].map((_, index) => {
                    <li key={index} className={type === "banner" ? styles.banner : styles.item}>

                    </li>
                })}
                </ul>
            ) : (
                <li className={type === "banner" ? styles.banner : styles.item}></li>
            )}
        </>
    )
}

export { Preloader }