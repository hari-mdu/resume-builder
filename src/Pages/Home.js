import React from 'react'
import Navbar from '../Components/NavBar'
import { Typography, Grid, Paper, Button } from '@mui/material'
import '../Styles/Pages/Home.css'
import { templates } from '../Utils/Data/Templates'
import { selectTemplate } from '../Redux/Actions/actions'
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux'


const mapStateToProps = (state) => ({
    selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});

//mapStateToProps is used for selecting the part of the data from the store that the connected component needs
// mapDispatchToProps allows you to specify which actions your component might need to dispatch

const mapDispatchToProps = (dispatch) => ({
    setSelectedTemplateId: (id) => dispatch(selectTemplate(id)),
});

function Home(props) {

    const navigate = useNavigate();

    const navigateToFillDetails = (id) => {
        props.setSelectedTemplateId(id);
        navigate("/template/fill-details");
    };

    // console.log(props.selectedTemplateId);

    //setting the navbar active link so to identify on which tab/page you are at.



    return (
        <>
            <Navbar active={"Resume Templates"} />
            <div className='home-header'>
                <Typography variant='h4' sx={{ mt: '45px', fontWeight: '600' }} >
                    Templates
                </Typography>
                <Typography variant='h6' color={'inherit'}>
                    Select a template to get started
                </Typography>
            </div>
            <Grid container spacing={4} justifyContent="center" marginTop={'25px'} px={'50px'} >
                {templates.map((template) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={template.id} marginBottom={'25px'}>
                            <Paper className='img-paper' style={{ maxWidth: '250px', width: '300px' }}>
                                <img
                                    className="template-img"
                                    src={template.template_img}
                                    alt={template.template_name}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <div className="blurscreen"></div>
                                <Button className="use-template-btn"
                                    onClick={() => navigateToFillDetails(template.id)}>Use Template</Button>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>


        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);