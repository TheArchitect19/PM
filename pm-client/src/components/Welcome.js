import { useEffect } from "react"
import { useCookies } from "react-cookie"

export const Welcome = () => {
    const [cookies, setCookies] = useCookies();

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

    return (
        <div>
            Welcome
            <input type="button" value="Profile" onClick={goToProfile} />
        </div>
    )
}