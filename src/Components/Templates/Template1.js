import React from 'react'
import '../../Styles/Components/Template.css'
import TemplateHeader from '../TemplateHeader';
import TemplateTitle from '../TemplateTitle';
import TemplateExperience from '../TemplateExperience';
import TemplateEducation from '../TemplateEducation';
import TemplateKeySkill from '../TemplateKeySkill';
import { data } from '../../Utils/Data/data'
import { Paper, Container } from '@mui/material';

export const Template1 = (props) => {
    // console.log(
    //   props.personalinfo,
    //   props.workexperience,
    //   props.educationinfo,
    //   props.skills
    // );
    const personalinfo = props.personalinfo
        ? props.personalinfo
        : data.personal_info;
    const workexperience = props.workexperience
        ? props.workexperience
        : data.work_experience;
    const educationinfo = props.educationinfo
        ? props.educationinfo
        : data.education_details;
    const skills = props.skills ? props.skills : data.key_skills;
    // console.log(props.index);
    return (
        <>
            <Paper
                id={`${props.index}report`}
                elevation={3}>
                <div className='template1'>
                    <TemplateHeader
                        personalInfo={personalinfo}
                        workExperience={workexperience}
                    />
                    <Container>
                        <div className="work-exp section">
                            <TemplateTitle title={"Work Experience"} />
                            <ul style={{ paddingBottom: 10 }}>
                                {workexperience.map((experience, index) => {
                                    return (
                                        <TemplateExperience
                                            key={index}
                                            experience={experience}
                                        />
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="education section">
                            <TemplateTitle title={"Education"} />
                            <ul><TemplateEducation education={educationinfo} /></ul>
                        </div>
                        <div className="skills section">
                            <TemplateTitle title={"Skills"} />

                            <ul style={{ marginBottom: 10 }}>
                                {skills.map((skill, index) => {
                                    return <TemplateKeySkill key={index} skill={skill} />;
                                })}
                            </ul>
                        </div>
                    </Container>
                </div>
            </Paper>
        </>
    )
}
