/* eslint react/prop-types: 0 */
import React from 'react';
import UserModal from './UserModal';

const Posts = () => {
    const [loading, setLoading] = React.useState(true);
    const [posts, setPosts] = React.useState();
    const [open, setOpen] = React.useState(false);
    const [user, setUser] = React.useState();
    let userID;

    const ApiCall = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(response => {
                setPosts(response);
            });
        setLoading(false);
    };

    const fetchUserInfo = id => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(res => res.json())
            .then(response => {
                setUser(response);
            });
    };

    const openUserModal = event => {
        handleModal();
        fetchUserInfo(event.currentTarget.dataset.id);
    };

    const handleModal = () => setOpen(!open);

    React.useEffect(() => {
        if (loading) {
            ApiCall();
        }
    });

    return (
        <div className="posts-modal">
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
                        posts.map((post, index) => (
                            <tr key={index}>
                                <td scope="row">
                                    <button className="btn btn-info" type="button" data-id={post.userId} onClick={openUserModal}>
                                        {post.userId}
                                    </button>
                                </td>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colspaw="4">Loading...</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {open ? <UserModal open={open} handleModal={handleModal} fetchUserInfo={fetchUserInfo} user={user} userId={userID} /> : ''}
        </div>
    );
};

export default Posts;
