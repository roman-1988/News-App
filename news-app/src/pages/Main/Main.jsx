import { useEffect, useState } from "react"
import { getNews } from "../../api/apiNews"
import { NewsBanner } from "../../components/NewsBanner/NewsBanner"
import { NewsList } from "../../components/NewsList/NewsList"
import { Preloader } from "../../components/Preloader/Preloader"
import { Pagination } from "../../components/Pagination/Pagination"
import styles from "./styles.module.css"

const Main = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 10
    const pageSize = 10

    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true)
            const response = await getNews(currentPage, pageSize)
            setNews(response.news)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchNews(currentPage)
    }, [currentPage])

    return (
        <main className={styles.main}>
            {news.length > 0 && !isLoading ? (
                <NewsBanner item={news[0]} />
            ) : (
                <Preloader count={1} type={"banner"} />
            )}
            <Pagination totalPages={totalPages} />
            {!isLoading ? (
                <NewsList news={news} />
            ) : (
                <Preloader count={10} type={"item"} />
            )}
        </main>
    )
}

export { Main }