import { connect } from 'react-redux';
import ToggleButton from './ToggleButton';
import {getMode, getLanguage, setDarkMode, setLightMode, setENG, setPL, enableLoading} from '../../../redux/globalRedux';

const mapStateToProps = (state) => ({
  mode: getMode(state),
  language: getLanguage(state),
});

const mapDispatchToProps = (dispatch) => ({
  setDarkMode: () => dispatch(setDarkMode()),
  setLightMode: () => dispatch(setLightMode()),
  setENG: () => dispatch(setENG()),
  setPL: () => dispatch(setPL()),
  enableLoading: () => dispatch(enableLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleButton);
