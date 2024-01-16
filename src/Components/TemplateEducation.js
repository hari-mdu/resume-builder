import React from 'react'

export default function TemplateEducation(props) {
  return (
    <>
        <li><h4>{props.education.degree} - {props.education.domain}</h4>
                        <p>{props.education.university}</p>
                        <p> ({props.education.startYear} - {props.education.endYear})</p></li>
    </>
  )
}
