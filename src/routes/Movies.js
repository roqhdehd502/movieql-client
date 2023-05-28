import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const ALL_MOVIES = gql`
    {
        allUsers {
            id
            firstName
            lastName
            fullName
            userName
        }
        allTweets {
            id
            text
            author {
                firstName
                lastName
                fullName
            }
        }
    }
`;

export default function Movies() {
    const { data, loading, error } = useQuery(ALL_MOVIES);
    // console.log(data);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Could not Fetch...</h1>;
    }

    return (
        <ul>
            <h1>Movies</h1>
            {data.allTweets.map(movie => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>
                        <div>{movie.text}</div>
                    </Link>
                    <div>{movie.author.fullName}</div>
                </li>
            ))}
        </ul>
    );
}
