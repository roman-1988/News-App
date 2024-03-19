import { formatDate } from "../../helpers/formatDate"

const Header = () => {

    return (
        <header>
            <h1>NEWS-APP</h1>
            <p>{formatDate(new Date())}</p>
        </header>
    )
}

export { Header }