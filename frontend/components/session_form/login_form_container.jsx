import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import LogInForm from './login_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Login',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)).then(() => dispatch(closeModal())),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);