import SearchBar from "./SearchBar";
import UserIcon from "./UserIcon";
import Logo from '../images/logo.jpg'

export default function HeaderBar() {
    return (
        <div className="nav_bar">
        <div className="img_logo">
            <a href="/"><img src={Logo} alt="Rise up"/></a>
        </div>
        <SearchBar />
        <UserIcon />
        </div>
    )
}