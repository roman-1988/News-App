import styles from "./styles.module.css"

const Pagination = ({
    handleNextPage,
    handlePreviousPage,
    handlePageClick,
    currentPage,
    totalPages
}) => {

    return (
        <div className={styles.pagination}>
            <button
                onClick={handlePreviousPage}
                className={styles.arrowBtn}
                disabled={currentPage <= 1}
            >
                {"<"}
            </button>
            <div className={styles.list}>
                {[...Array(totalPages)].map((_, index) => {
                    return <button
                        onClick={() => handlePageClick(index + 1)}
                        className={styles.pageNumber}
                        disabled={index + 1 === currentPage}
                        key={index}>
                        {index + 1}
                    </button>
                })}
            </div>
            <button
                onClick={handleNextPage}
                className={styles.arrowBtn}
                disabled={currentPage >= totalPages}
            >
                {">"}
            </button>
        </div>
    )
}

export { Pagination }