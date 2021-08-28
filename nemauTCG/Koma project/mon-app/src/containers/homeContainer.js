import { connect } from "react-redux";

import HomePage from "../components/home-page/home";

const mapStateToProps = state => ({
    teams: state.teams

})

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)