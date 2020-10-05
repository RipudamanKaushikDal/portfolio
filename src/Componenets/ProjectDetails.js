import React,{useState} from 'react';
import {  useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {useParams, useHistory} from "react-router-dom";
import { IconButton } from '@material-ui/core';


function ProjectDetails({projects}){
  const {appName} =useParams();
  const history = useHistory();
  const baseUrl = "https://ripudamanprojects.herokuapp.com";

  
  const chosenProject = projects.find(project => project.title === appName);
  console.log(chosenProject)

  
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = chosenProject["images"].length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return(
    <div className='projectdetails'>
      
      <div className='screenshots'>

          <IconButton onClick={() => history.goBack()} style={{alignSelf:"end",color:"whitesmoke",width:"5%"}}>
            <HighlightOffRoundedIcon/>
          </IconButton>
          <h3 style={{borderBottom:'dotted',fontSize:30,alignSelf:'center'}}>Project Details</h3>
          <img
            src={baseUrl+"/images/"+chosenProject.images[activeStep]}
            alt='screesnshots'
          />

        <MobileStepper
          style={{width:"640px",alignSelf:"center"}}
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
        <h3 style={{borderBottom:'dotted',fontSize:30}}>Summary</h3>
        <h3>{chosenProject.text}</h3>
      </div>

    </div>
  

  

  
    
  )
}




export default ProjectDetails