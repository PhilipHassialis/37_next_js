import React from "react";
import Link from "next/link";

export default function index() {
    console.log("*********** RUNNING INDEX");
    return (
        <div>
            <Link href="/about">
                <button>About page</button>
            </Link>
            <Link href="/contact">
                <span>Contact us</span>
            </Link>
            <h1>My Index page</h1>
        </div>
    );
}
