import { useEffect, useState } from "react";

//custom hook
export function usePostTitle() {
    const [post, setPost] = useState({});

    async function getPosts() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const json = await response.json()
        setPost(json);
    }

    useEffect(() => {
        getPosts();
    }, [])

    return post.title;
}

export function useFetch(url) {
    const [finaldata, setFinaldata] = useState({})
    const [loading, setLoading] = useState(true)

    async function getDetails() {
        setLoading(true)
        const response = await fetch(url)
        const json = response.json()
        setFinaldata(json);
        setLoading(false)
    }

    useEffect(() => {
        getDetails();
    }, [url])

    return {
        finaldata,
        loading
    }
}