import { connect } from 'react-redux';
import Header from './Header';
import { getMode, getLanguage } from '../../../redux/globalRedux';
import { getContent, getLang, getHeader} from '../../../redux/headerRedux';

const mapStateToProps = (state) => ({
  mode: getMode(state),
  language: getLanguage(state),
  content: getContent(state),
  contentLang: getLang(state),
});

const mapDispatchToProps = (dispatch) => ({
  getHeader: (lang) => dispatch(getHeader(lang)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
