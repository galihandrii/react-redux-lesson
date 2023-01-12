import { useSelector } from "react-redux";

const Result = () => {
    const {total}= useSelector((state)=>state)
    console.log(total);


    return (
        <div>
        <h1>{total}</h1>

        </div>
    )
}

export default Result;