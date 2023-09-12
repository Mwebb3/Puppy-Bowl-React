import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const AllPuppies = () => {
    const [allPuppies, setAllPuppies] = useState([]);

    useEffect(() => {
        async function fetchPuppies() {
            const response = await axios.get("https://fsa-puppy-bowl.herokuapp.com/api/2307-ftb-et-web-ft/players");
            const data = response.data.data;
            setAllPuppies(data.players)
        }
        fetchPuppies()
    }, [])

    return (
        <div>
            <h1>All Puppies</h1>
            {
                allPuppies.map((puppy) => {
                    return (
                        <div key={puppy.id}>
                            <Link to={`/players/${puppy.id}`}>{puppy.name}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllPuppies