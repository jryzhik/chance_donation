import { useRouter } from 'next/router'

const Query = () =>{
    const page = useRouter()?.query?.page || "1"
    // Default value = "1"

    console.log("page is: ", page);

    return (<></>);
}

export default Query