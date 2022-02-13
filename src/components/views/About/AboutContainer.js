import { connect } from 'react-redux';
import About from './About';
import { getMode, getLanguage } from '../../../redux/globalRedux';
import { getPL, getENG } from '../../../redux/aboutRedux';

const mapStateToProps = (state) => ({
  mode: getMode(state),
  language: getLanguage(state),
  contentPL: getPL(state),
  contentENG: getENG(state),
});

export default connect(mapStateToProps)(About);
