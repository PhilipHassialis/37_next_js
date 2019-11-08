import React from "react";
import Navbar from "../components/Navbar";

export default function index() {
    console.log("*********** RUNNING INDEX");
    return (
        <div>
            <Navbar />
            <h1>My Index page</h1>
        </div>
    );
}
