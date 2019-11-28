import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './modalstyle.css'

class Example extends React.Component {

    state = {
        show: this.props.show
    }

    handleClose = (e) => {
        this.setState({ show: false })
    }
    render() {
        console.log(this.props.modalInfo)
        console.log('hello')
        return (
            <>
                <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.modalInfo.Title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div><img src={this.props.poster} className="card-img-top w-50 imgStyle" alt="..." /></div>
                            <p><b>Director:</b> {this.props.modalInfo.Director}</p>
                            <p><b>Actors:</b> {this.props.modalInfo.Actors}</p>
                            <p><b>Country:</b> {this.props.modalInfo.Country}</p>
                            <p><b>Metascore:</b> {this.props.modalInfo.Metascore}</p>
                            <p><b>Genre:</b> {this.props.modalInfo.Genre}</p>
                            <p><b>Plot:</b> {this.props.modalInfo.Plot}</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose.bind(this)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
export default Example;