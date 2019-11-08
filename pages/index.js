import React from "react";
import Link from "next/link";

export default function index() {
    console.log("*********** RUNNING INDEX");
    return (
        <div>
            <Link href="/about">
                <a>About page</a>
            </Link>
            <Link href="/contact">
                <a>Contact us</a>
            </Link>
            <h1>My Index page</h1>
        </div>
    );
}
