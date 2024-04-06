import styles from "./styles.module.css"

const Pagination = ({ totalPages }) => {

    return (
        <div className={styles.pagination}>
            <button className={styles.arrowBtn}>{"<"}</button>
            <div className={styles.list}>
                {[...Array(totalPages)].map((_, index) => {
                    return <button className={styles.pageNumber} key={index}>{index + 1}</button>
                })}
            </div>
            <button className={styles.arrowBtn}>{">"}</button>
        </div>
    )
}

export { Pagination }