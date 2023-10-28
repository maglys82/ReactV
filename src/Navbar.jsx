
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCake, faCakeCandles, faContactBook, faContactCard, faHome, faHomeAlt } from '@fortawesome/free-solid-svg-icons';


function Navegador() {
    return (
        <>

            <Navbar className="navegacion" bg="danger" data-bs-theme="dark">
                <Container className="d-flex justify-content-between align-items-center">
                    <FontAwesomeIcon icon={faHome} size="md" style={{ color: 'white' }} />

                    <Link
                        to="/"
                        className="text-white ms-3 text-decoration-none"
                    >
                        Home
                    </Link>

                    <Container className="d-flex justify-content-star align-items-center">
                        <FontAwesomeIcon icon={faContactBook} size="md" style={{ color: 'gold' }} />
                        <Link
                            to="/contacto"
                            className="text-white ms-3 text-decoration-none"
                        >
                            Contacto
                        </Link>
                    </Container>

                    <Link
                        to="/"
                        className="text-white ms-auto text-decoration-none"
                    >
                    Happy Cake
                    </Link>
                    <FontAwesomeIcon icon={faCake} size="md" style={{ color: 'gold' }} />
                </Container>
            </Navbar>


        </>
    );
}

export default Navegador;