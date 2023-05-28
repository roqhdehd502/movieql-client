import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
    query ($movieId: ID!) {
        tweet(id: $movieId) {
            id
            text
        }
    }
`;

export default function Movie() {
    const { id } = useParams();
    
    const { data, loading, error } = useQuery(GET_MOVIE, {
        variables: {
            movieId: id,
        }
    });
    console.log(data, loading);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Could not Fetch...</h1>;
    }

    return (
        <ul>
            <li>{data.tweet.id}</li>
            <li>{data.tweet.text}</li>
        </ul>
    );
}
