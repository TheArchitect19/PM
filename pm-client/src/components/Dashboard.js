import React, { useState } from "react";
import { useCookies } from "react-cookie";
import './Dashboard.css'

const ChangePassword = () => {
    return (
        <div>
            <div className="mb-3">
                <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Old Password"
                />
            </div>
            <div className="mb-3">
                <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="New Password"
                />
            </div>
            <div className="mb-3">
                <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Repeat New Password"
                />
            </div>
        </div>
    )
}

// name, email, isd, phone, address, designation, change password
export const Dashboard = () => {
    const profilePIcDefault =
        "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const [cookies, setCookies] = useCookies();
    const [form, setForm] = useState({
        name: "",
        email: "",
        isd: cookies['isd'],
        phone: cookies['phone'],
        address: "",
        designation: "",
        iswhatsapp: "0"
    })
    const [passd, setPassd] = useState(false);
    const [text, setText] = useState("Change Password?");

    function click() {
        setPassd(!passd);
        if (!passd) {
            setText("Do not Change Password");
        }
        else {
            setText("Change Password?");
        }
    }

    return (
        <>
            <div className="container content mt-10">
                <h5 className="mb-3"> 📝Edit your profile</h5>
                <div className="row border p-4">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label">
                                Your Full Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputName"
                                aria-describedby="emailHelp"
                                name="name"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                name="email"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPhone" className="form-label">
                                Phone Number
                            </label>
                            <input
                                type="telephone"
                                className="form-control"
                                id="exampleInputPhone"
                                aria-describedby="emailHelp"
                                value={"+" + form.isd + "-" + form.phone}
                            />
                        </div>



                        {/* radios button inpput ================== */}

                        <div className="form-check mt-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                I Acept Terms And Conditions
                            </label>
                        </div>

                    </div>
                    {/* col-md-6 ends */}

                    <div className="col-md-4 ">
                        <div className="profile_section">
                            <div className="mb-3">
                                <label htmlFor="exampleInputPhone" className="form-label">
                                    Designation
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputDesignation"
                                    aria-describedby="emailHelp"
                                    name="designation"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPhone" className="form-label">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputAddress"
                                    aria-describedby="emailHelp"
                                    name="address"
                                />
                            </div>
                            <div className="mb-3">
                                <button type="submit"
                                    className="form__submit-btn btn-sm " onClick={click}>
                                    {text}
                                </button>
                            </div>
                            {passd ? <ChangePassword /> : <></>}
                            {/* <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Change Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div> */}

                        </div>
                        <div className="mb-3">

                        </div>
                    </div>
                    <button
                        type="submit"
                        className="form__submit-btn btn-sm "
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>

            </div>
        </>
    );
};

