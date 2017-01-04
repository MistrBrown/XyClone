import { connect } from 'react-redux'
import { removeComponent, addComponent } from '../actions/editingActions'
import Sidebar from '../components/sidebar'

const mapStateToProps = (state) => {
    console.log('mapping state', state);
    return {
        components: state.xyclone.components
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSidebarClick: (type) => {
            console.log('DISPATCHING ON COMPONENT CLICK')
            dispatch(addComponent(type))
        }
    }
}

const SidebarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)

export default SidebarContainer;