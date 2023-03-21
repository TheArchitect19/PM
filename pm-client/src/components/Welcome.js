import { useEffect } from "react"
import { useCookies } from "react-cookie"

export const Welcome = () => {
    const [cookies, setCookies, removeCookies] = useCookies();

    useEffect(() => {
        function checkLog() {
            if (cookies['login'] !== '1') {
                alert("Please login to continue.");
                window.location.href = "/register";
            }
        }
        checkLog();
    }, []);

    function goToProfile() {
        window.location.href = "/profile";
    }

    function logout() {
        removeCookies("login");
        removeCookies("name");
        removeCookies("email");
        window.location.href = "/";
    }

    return (
        <div>
            Welcome, {cookies['name']}
            <br />
            <input type="button" value="Profile" onClick={goToProfile} />
            <br />
            <input type="button" value="Logout" onClick={logout} />
            <br />
            <input type="button" value="My Shops" onClick={logout} />
            <br />
            <input type="button" value="Sell Your Products" onClick={logout} />
        </div>
    )
}