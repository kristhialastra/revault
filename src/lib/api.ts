export async function fetchPosts(page: number, perPage: number) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=${page}&_limit=${perPage}');
    const posts = await res.json();
    return { posts }
}