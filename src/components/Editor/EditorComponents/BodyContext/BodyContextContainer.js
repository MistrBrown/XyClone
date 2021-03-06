import { connect } from 'react-redux'
import BodyContext from './BodyContext'
import { changeBodyProps } from '../../../../actions/EditingActions'
import { storage } from '../../../../cache/ComponentCache'

const mapStateToProps = (state) => {
  // console.log('MAPPING THE STATE TO BODYCONTEXT', state);
  return {
    components: state.xyclone.components,
    currComponent: state.xyclone.currComponent,
    currComponentId: state.xyclone.currComponentId,
    currProjectId: state.xycloneProjects.currProjectId,
    currProject: state.xycloneProjects.currProject,
    loginStatus: state.xycloneLogin.loginStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editBodyProps: (newProps, projectId) => {
      dispatch(changeBodyProps(newProps, projectId));
    }
  }
}

const BodyContextContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BodyContext)

export default BodyContextContainer;
