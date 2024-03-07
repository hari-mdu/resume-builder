import "../Styles/Components/KeySkills.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Paper, Divider, Button } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { connect } from "react-redux";
import {BackNextButton,Input} from "../Pages/Index";
import { addNewSkills, deleteSkill, editSkill } from "../Redux/Actions/actions";

// mapStateToProps function to map Redux state to component props
const mapStateToProps = (state) => ({
  skills: state.keySkillsReducer.skills, // Mapping skills from Redux state to props
});

// mapDispatchToProps function to map dispatch actions to component props
const mapDispatchToProps = (dispatch) => ({
  onAddNewSkill: () => dispatch(addNewSkills()), // Dispatching action to add a new skill
  onEditSkill: (skills) => dispatch(editSkill(skills)), // Dispatching action to edit skills
  onDeleteSkill: (index) => dispatch(deleteSkill(index)), // Dispatching action to delete a skill
});

// KeySkills functional component
function KeySkills(props) {
  const [loading, setLoading] = useState(false); // State variable to track loading state
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Form control hook for form validation

  // Event handler for previewing skills
  const handlePreview = (data) => {
    setLoading(true); // Setting loading state to true

    // Simulating loading with timeout
    setTimeout(() => {
      setLoading(false); // Setting loading state to false
      props.setTab(props.tab + 1); // Updating tab state to move forward
    }, 1000);
  };

  // Event handler for navigating back
  const handleBack = () => {
    props.setTab(props.tab - 1); // Updating tab state to move back
  };

  // Event handler for editing a skill
  const onEditSkill = (value, id) => {
    // Creating a new array of skills with the edited skill at the specified index
    const newSkills = props.skills.map((skill, index) => {
      if (index === id) {
        return value;
      } else return skill;
    });

    // Dispatching action to edit skills with the updated skills array
    props.onEditSkill(newSkills);
  };

  // console.log(props.skills, errors);

  return (
    <Paper elevation={3} className="key-skills-paper">
      <h2 className="key-skills-heading">Key Skills</h2>
      <Divider />
      <form onSubmit={handleSubmit(handlePreview)}>
        <div className="key-skills-form-fields">
          {props.skills.map((skill, index) => {
            return (
              <div key={index} className="key-input-with-delete">
                <Input
                  type="text"
                  name={`skill${index + 1}`}
                  register={register}
                  multiline={false}
                  value={skill}
                  setValue={(skill) => onEditSkill(skill, index)}
                  error={errors[`skill${index + 1}`] ? true : false}
                  errorMessage={
                    errors[`skill${index + 1}`]
                      ? errors[`skill${index + 1}`].message
                      : null
                  }
                />
                {props.skills.length === 1 ? null : (
                  <DeleteOutlineOutlinedIcon
                    sx={{ marginLeft: "10px" }}
                    onClick={() => props.onDeleteSkill(index)}
                  />
                )}
              </div>
            );
          })}
        </div>
        {props.skills.length >= 6 ? null : (
          <Button
            className="add-new-btn"
            variant="text"
            onClick={props.onAddNewSkill}>
            Add new
          </Button>
        )}
        <Divider className="key-skills-divider" />
        <BackNextButton
          onNext={handlePreview}
          loading={loading}
          tab={props.tab}
          onBack={handleBack}
          nextTitle={"Preview"}
          backTitle={"Back"}
        />
      </form>
    </Paper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(KeySkills);
