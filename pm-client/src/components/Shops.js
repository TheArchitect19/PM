import { useEffect } from "react"
import { useCookies } from "react-cookie";

export const Shops = () => {
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

    return (
        <div>
            Hello
        </div>
    )
}