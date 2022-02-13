import { connect } from 'react-redux';
import Contact from './Contact';
import { getMode, getLanguage } from '../../../redux/globalRedux';
import { getPL, getENG } from '../../../redux/contactRedux';

const mapStateToProps = (state) => ({
  mode: getMode(state),
  language: getLanguage(state),
  contentPL: getPL(state),
  contentENG: getENG(state),
});

export default connect(mapStateToProps)(Contact);
