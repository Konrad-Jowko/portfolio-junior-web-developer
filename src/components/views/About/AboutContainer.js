import { connect } from 'react-redux';
import About from './About';
import { getMode, getLanguage, enableLoading} from '../../../redux/globalRedux';
import { getContent, getLang, getAbout  } from '../../../redux/aboutRedux';

const mapStateToProps = (state) => ({
  mode: getMode(state),
  language: getLanguage(state),
  content: getContent(state),
  contentLang: getLang(state),
});

const mapDispatchToProps = (dispatch) => ({
  enableLoading: () => dispatch(enableLoading()),
  getAbout: (lang) => dispatch(getAbout(lang)),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
