import React from "react";
import { withRouter } from "next/router";

const post = props => {
    // console.log(`IN POST #${id}`);
    return <h1>Post #{props.router.query.id}</h1>;
};

// post.getInitialProps = async ({ query }) => {
//     console.log("POST GET INITIAL PROPS", query);

//     return query;
// };

export default withRouter(post);
