import React from "react";

const index = () => {
    console.log("*********** RUNNING INDEX");
    return (
        <div>
            <h1>My Index page</h1>
        </div>
    );
};

index.getInitialProps = async () => {
    console.log("GETINITIALPROPS 2.0 - FUNCTION COMPONENT");
    return {};
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
//         console.log("FETCHING YOUR DATA - GETINITIALPROPS");
//         return {};
//     }

//     render() {
//         return (
//             <div>
//                 <h1>My Index page</h1>
//             </div>
//         );
//     }
// }
