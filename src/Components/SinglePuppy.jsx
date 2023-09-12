import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const SinglePuppy = () => {
    const {id} = useParams();
    const [puppy, setPuppy] = useState(null);

    useEffect(() => {
        async function fetchPuppy() {
            const response = await axios.get(`https://fsa-puppy-bowl.herokuapp.com/api/2307-ftb-et-web-ft/players/${id}`);
            const {data} = response.data
            setPuppy(data.player)
        }
        fetchPuppy()
    }, [])

    return (
        <div>
            <h1>{puppy && puppy.name}</h1>
            <h2>{puppy && puppy.breed}</h2>
            <h2>{puppy && puppy.status}</h2>
        </div>
    )
}

export default SinglePuppy