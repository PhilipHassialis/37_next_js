import React from "react";

const post = ({ id }) => {
    console.log(`IN POST #${id}`);
    return <h1>Post #{id}</h1>;
};

post.getInitialProps = async ({ query }) => {
    console.log("POST GET INITIAL PROPS", query);

    return query;
};

export default post;
