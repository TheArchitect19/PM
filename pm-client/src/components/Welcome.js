import { useEffect } from "react"
import { useCookies } from "react-cookie"

export const Welcome = () => {
    const [cookies, setCookies, removeCookies] = useCookies();

    function goToProfile() {
        window.location.href = "/profile";
    }

    return (
        <div>
            Welcome
            <br />
            <input type="button" value="Profile"/>
            <br />
            <input type="button" value="Logout"/>
            <br />
            <input type="button" value="My Shops" onClick={() => { window.location.href = "/shops" }} />
            <br />
            <input type="button" value="Sell Your Products"/>
        </div>
    )
}