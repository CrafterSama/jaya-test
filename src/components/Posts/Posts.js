/* eslint react/prop-types: 0 */
import React from 'react';

const Posts = () => {
    const [loading, setLoading] = React.useState(true);
    const [posts, setPosts] = React.useState();

    const ApiCall = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(response => {
                console.log(response);
                setPosts(response);
            });
        setLoading(false);
    };

    React.useEffect(() => {
        if (loading) {
            ApiCall();
        }
    });

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">User ID</th>
                    <th scope="col">Post ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                </tr>
            </thead>
            <tbody>
                {posts ? (
                    <tr>
                        <td scope="row">{posts.userId}</td>
                        <td>{posts.id}</td>
                        <td>{posts.title}</td>
                        <td>{posts.body}</td>
                    </tr>
                ) : (
                    <tr>
                        <td colspaw="4">Loading...</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default Posts;
