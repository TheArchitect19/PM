import { useState } from "react"
import { useCookies } from "react-cookie"

export const Dashboard = () => {
    const [cookies, setCookies] = useCookies();
    const [form, setForm] = useState({
        name: "0",
        email: "0",
        isd: "0",
        phone: "0",
        address: "0",
        designation: "0",
        password: "0",
        iswhatsapp: "0",
        phone: cookies["phone"],
        isd: cookies["isd"]
    })
    async function save() {
        await fetch("http://localhost:5000/profileSeller", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <div>
            <input type="button" onClick={save} value="Save" />
        </div>
    )
}
