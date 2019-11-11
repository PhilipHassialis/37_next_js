import axios from "axios";
import React from "react";

const index = ({ posts }) => {
    console.log("*********** RUNNING INDEX");
    return (
        <div>
            <h1>My Index page</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

index.getInitialProps = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const { data } = res;
    console.log(data[0]);
    return { posts: data };
};

export default index;

// import React, { Component } from "react";

// export default class index extends Component {
//     constructor(props) {
//         super(props);
//     }

//     componentDidMount() {
//         // console.log("FETCHING YOUR DATA - COMPOENENTDIDMOUNT");
//     }

//     static async getInitialProps() {
//         const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//         const { data } = res;
//         console.log(data[0]);
//         return { posts: data };
//     }

//     render() {
//         const { posts } = this.props;
//         return (
//             <div>
//                 <ul>
//                     {posts.map(post => (
//                         <li key={post.id}>{post.title}</li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }
