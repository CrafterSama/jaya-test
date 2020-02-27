/* eslint react/prop-types: 0 */
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const UserModal = props => {
    const { open, handleModal, user, buttonLabel } = props;

    return (
        <div>
            <Button color="danger" onClick={handleModal}>
                {buttonLabel}
            </Button>
            <Modal isOpen={open} toggle={handleModal} className="user-modal">
                <ModalHeader toggle={handleModal}>User Posts</ModalHeader>
                <ModalBody>
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
                            {user ? (
                                user.map((post, index) => (
                                    <tr key={index}>
                                        <td scope="row">{post.userId}</td>
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
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={handleModal}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default UserModal;
