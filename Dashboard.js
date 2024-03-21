import { useEffect, useState } from "react"

const Dashboard = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setCounter(counter + 1)
        }, 3000);
    })

    return (
        <div>
            <h1>
                {counter}
            </h1>
        </div>
    )
}

export default Dashboard