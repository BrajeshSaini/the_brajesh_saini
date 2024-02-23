import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import PopUpImg from './../assets/images/pop-up/banner-1.jpeg';

function PopUpModal() {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setShowModal(true); // Set showModal to true when the component mounts
    }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

    return (
        <>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton className='py-2'>
                    <Modal.Title>My Latest Project</Modal.Title>
                </Modal.Header>
                <Modal.Body className='p-0'>
                    <Image src={PopUpImg} className='w-100 my_self_img' />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShowModal(false)} variant="primary"  size="sm" className="tbs_btn tbs_btn_sm tbs_outline_primary_btn">
                        <span className='px-3'>
                        Close

                        </span>
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default PopUpModal;