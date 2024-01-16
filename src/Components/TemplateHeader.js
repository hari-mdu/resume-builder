import React from 'react'
import TemplateTitle from './TemplateTitle'

export default function TemplateHeader(props) {
    return (
        <>

            <div className="template-header">
                <div className="img-section">
                    {props.personalInfo.profileImg.length > 0 ? (
                        <div className="template-img-cont">
                            <img
                                className="profile-pic"
                                src={props.personalInfo.profileImg}
                                alt="profile-img"
                            />
                        </div>
                    ) : (
                        <div
                            className="template-img-cont">
                            <p style={{ color: props.bgColor }} className="template-img-text">
                                None
                            </p>
                        </div>
                    )}
                </div>
                <div className='personal'>
                    <h1 className='profile-name'>{props.personalInfo.firstName + " " + props.personalInfo.lastName}</h1>
                    <h4 className='job-title'> {props.workExperience[0].jobTitle}</h4>
                </div>
                <div className='personal-info'>
                    <h5>Address : {props.personalInfo.address}</h5>
                    <h5>City : {props.personalInfo.city}</h5>
                    <h5>Country : {props.personalInfo.country}</h5>
                    <h5>Postal code : {props.personalInfo.postalCode}</h5>
                    <h5>Phone : {props.personalInfo.mobile}</h5>
                </div>
            </div>
            <div className='objective section'>
                <TemplateTitle title={"Objective"} />
                <p>{props.personalInfo.objective}.</p>
            </div>

        </>
    )
}
