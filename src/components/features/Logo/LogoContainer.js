import { connect } from 'react-redux';
import Logo from './Logo';
import {getMode, enableLoading} from '../../../redux/globalRedux';

const mapStateToProps = (state) => ({
  mode: getMode(state),
});

const mapDispatchToProps = (dispatch) => ({
  enableLoading: () => dispatch(enableLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logo);
