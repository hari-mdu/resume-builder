import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

// mapStateToProps function to map Redux state to component props
const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId, // Mapping selectedTemplateId from Redux state to props
});

// mapDispatchToProps function to map dispatch actions to component props
const mapDispatchToProps = (dispatch) => {
  return {}; // No actions to dispatch in this component
};

// CheckSelectedId functional component
const CheckSelectedId = (props) => {
  // Extracting selectedTemplateId from props
  const selectedId = props.selectedTemplateId;
  
  // Conditional rendering: if selectedId is truthy, render children, otherwise redirect to "/"
  return selectedId ? props.children : <Navigate to={"/"} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckSelectedId);
