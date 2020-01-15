import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import NavLink from './nav_link';
import { clearErrors } from '../../actions/session_actions'

const mapStateToProps = (state) => {
    return({
        currentUser: state.entities.users[state.session.id]
    })
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavLink);
