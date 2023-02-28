import { useFetch } from "../hooks/useFetch"


export const MultipleCustomHooks = () => {

    const { data, isLoading, hasError } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes/1');

    return(
        <>
            <h1>Breaking bad</h1>
            <hr />
        </>
    )
}