import React from 'react'

export default function TemplateExperience(props) {
    return (
        <>
            <li><h4>{props.experience.jobTitle}</h4>
                <p>- {props.experience.organizationName}</p>
                <p> ({props.experience.startYear} - {props.experience.endYear})</p></li>
        </>
    )
}
