import { connect } from 'react-redux';
import Homepage from './Homepage';
import { getMode, getLanguage, enableLoading } from '../../../redux/globalRedux';
import { getContent, getLang, getHomepage } from '../../../redux/homepageRedux';

const mapStateToProps = (state) => ({
  mode: getMode(state),
  language: getLanguage(state),
  content: getContent(state),
  contentLang: getLang(state),
});

const mapDispatchToProps = (dispatch) => ({
  enableLoading: () => dispatch(enableLoading()),
  getHomepage: (lang) => dispatch(getHomepage(lang)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
