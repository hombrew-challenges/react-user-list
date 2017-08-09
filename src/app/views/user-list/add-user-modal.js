import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {BTModal, BTButton, BTInput} from 'app/views/bt-components'
import {Modal, Row, Col} from 'react-bootstrap'

const validations = ['required']
/**
 * User List Add User Modal
 */
export default class UserListAddUserModal extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {photo: '', name: '', description: '', validate: false}
    this.setInput = this.setInput.bind(this)
    this.createUser = this.createUser.bind(this)
  }

  /**
   * Method for changin inputs states
   * @param {Event} ev event of the element changed
   */
  setInput(ev) {
    const {name, value} = ev.target
    this.setState(() => ({[name]: value}))
  }

  /**
   * Method for creating the user
   * Checks form required values, creates the user, and then closes the modal
   */
  createUser() {
    const {createUser, onHide} = this.props
    const {photo, name, description} = this.state
    if (photo === '' || name === '' || description === '') {
      this.setState(() => ({validate: true}))
      return
    }
    if (!createUser) {
      return
    }

    new Promise(resolve => createUser({photo, name, description}, resolve)) 
      .then(() => onHide())
  }

  render() {
    const {onHide, show} = this.props
    const {photo, name, description, validate} = this.state
    return (
      <BTModal onHide={onHide} show={show} dialogClassName='BTPAGE__user-list-modal'>
        <Modal.Header>
          <Modal.Title><strong>Agregar nuevo contacto</strong></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="margin-bottom-10">
            <Col xs={12}>
              <BTInput
                id='user-list-modal-photo-input'
                label="URL Imagen de perfil"
                name='photo'
                value={photo}
                onChange={this.setInput}
                help={(validate && photo === '') && 'Parámetro requerido'}
                validations={validations}/>
              <BTInput
                id='user-list-modal-name-input'
                label="Nombre"
                name='name'
                value={name}
                onChange={this.setInput}
                help={(validate && name === '') && 'Parámetro requerido'}                
                validations={validations}/>
              <BTInput
                id='user-list-modal-desc-input'
                label="Descripción"
                name='description'
                value={description}
                onChange={this.setInput}
                help={(validate && description === '') && 'Parámetro requerido'}
                componentClass="textarea"
                rows={4}
                validations={validations}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="text-center">
              <BTButton onClick={this.createUser}>Guardar</BTButton>
            </Col>
          </Row>
        </Modal.Body>
      </BTModal>
    )
  }

  static get propTypes() {
    return {
      onHide: PropTypes.func.isRequired,
      show: PropTypes.bool.isRequired,
      createUser: PropTypes.func
    }
  }

  static get displayName() {
    return 'views/user-list/add-user-modal'
  }
}

