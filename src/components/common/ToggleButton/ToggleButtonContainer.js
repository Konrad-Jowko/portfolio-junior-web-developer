import { connect } from 'react-redux';
import ToggleButton from './ToggleButton';
import {getMode, getLanguage, setMode, setLang, enableLoading} from '../../../redux/globalRedux';

const mapStateToProps = (state) => ({
  mode: getMode(state),
  language: getLanguage(state),
});

const mapDispatchToProps = (dispatch) => ({
  setMode: (mode) => dispatch(setMode(mode)),
  setLang: (lang) => dispatch(setLang(lang)),
  enableLoading: () => dispatch(enableLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleButton);
