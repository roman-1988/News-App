import { useEffect, useState } from "react"
import { getNews } from "../../api/apiNews"
import { NewsBanner } from "../../components/NewsBanner/NewsBanner"
import { NewsList } from "../../components/NewsList/NewsList"
import { Preloader } from "../../components/Preloader/Preloader"
import styles from "./styles.module.css"

const Main = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setIsLoading(true)
                const response = await getNews()
                setNews(response.news)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchNews()
    }, [])

    return (
        <main className={styles.main}>
            {news.length > 0 && !isLoading ? (
                <NewsBanner item={news[0]} />
            ) : (
                <Preloader count={1} type={"banner"} />
            )}

            {!isLoading ? (
                <NewsList news={news} />
            ) : (
                <Preloader count={10} type={"item"} />
            )}
        </main>
    )
}

export { Main }