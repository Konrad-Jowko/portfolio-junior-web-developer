import { connect } from 'react-redux';
import Contact from './Contact';
import { getMode, getLanguage, enableLoading} from '../../../redux/globalRedux';
import { getContent, getLang, getContact  } from '../../../redux/contactRedux';

const mapStateToProps = (state) => ({
  mode: getMode(state),
  language: getLanguage(state),
  content: getContent(state),
  contentLang: getLang(state),
});

const mapDispatchToProps = (dispatch) => ({
  enableLoading: () => dispatch(enableLoading()),
  getContact: (lang) => dispatch(getContact(lang)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
