import { connect } from 'react-redux';
import LoadingScreen from './LoadingScreen';
import {getMode, getLanguage, disableLoading} from '../../../redux/globalRedux';

const mapStateToProps = (state) => ({
  mode: getMode(state),
  lang: getLanguage(state),
});

const mapDispatchToProps = (dispatch) => ({
  disableLoading: () => dispatch(disableLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoadingScreen);
