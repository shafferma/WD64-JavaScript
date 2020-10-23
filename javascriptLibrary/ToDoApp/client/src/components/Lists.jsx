import React, {useState, useEffect} from 'react';
import {Button, Card, CardBody, CardTitle, CardText, Modal, ModalHeader, ModalBody } from 'reactstrap';


const ListsComponent = (props) => {
    
    const [userLists, setUserLists] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => setModalOpen(!modalOpen);

    useEffect (() => {
        fetch("http://localhost:8080/list", {
            headers: {
                "Authroization": props.token,
            },
        })
        .then(response => response.json())
        .then(body => {
            setUserLists(body.results);
        })
        .catch(error => console.log(error));
    }, []);
    
    return(
        <div id="listsView">
            <div id="ListViewHeader">
                <h1>Your Lists</h1>
                <Button color="success" onClick={toggleModal}>
                    New Lists
                </Button>
                <Modal isOpen={modalOpen} toggle={toggleModal}>
                    <ModalHeader>
                        Create New TODO List
                    </ModalHeader>
                    <ModalBody>
                        {/* Create a form to create a new todo list */}
                        <h1>TEST</h1>
                        <Button color="warning" onClick={toggleModal}>
                            Cancel
                        </Button>
                    </ModalBody>
                </Modal>
            </div>
            {
                userLists.length > 0 
                ? userLists.map(item => {
                    return (
                        <Card>
                            <CardBody>
                                <CardTitle>{item.title}</CardTitle>
                                <CardText>{item.description}</CardText>
                                <Button>
                                    {/* TODO: update this button */}
                                    View List Items
                                </Button>
                            </CardBody>
                        </Card>
                    )
                }) 
                : (
                    <h1>You have no lists</h1>
                )
            }
        </div>
    );
};

export default ListsComponent;