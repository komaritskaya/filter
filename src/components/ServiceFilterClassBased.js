import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeFilterField } from "../actions/actionCreators";

class ServiceFilterClassBased extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
  };

  handleChange = evt => {
    const { value } = evt.target;
    this.props.onChange(value);
  };

  render() {
    const { filter } = this.props;

    return (
      <form>
        <label htmlFor="filter">Фильтр: </label>
        <input name="filter" onChange={this.handleChange} value={filter} />
      </form>
    );
  }
}

const mapStateToProps = state => ({ filter: state.serviceFilter.filter });

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (value) => dispatch(changeFilterField(value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceFilterClassBased);
