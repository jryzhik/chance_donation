import React from "react";

export async function getServerSideProps(context) {
    const page = context?.query?.page || "1"
    // Default value = "1"
    console.log("page is: ", page);
    return (
        <h1>dd</h1>
    );
  }

const Index = (props) =>{
    return(<></>)
}

export default Index