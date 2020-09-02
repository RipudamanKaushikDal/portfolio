import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import me from '../images/me.jpg';
import { Grid } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    leftContainer:{
        margin:'auto',
        height:'100%',
        background:`url(${me}) no-repeat center center`,
        backgroundSize:'cover',
        textAlign:'center',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
    rightContainer:{
        margin:'auto',
        height:'100%',
        direction:'column',
        background:'#565656',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    }
   
}))

function AboutMe(){

    const classes = useStyles();
    return(
     <Grid container style={{height:'100vh',width:'100%'}} >
         <Grid container className={classes.leftContainer} xs={11} sm={11} md={7} lg={7} ></Grid>
         <Grid container className={classes.rightContainer} xs={12} sm={12} md={5} lg={5}>
             <Grid item style={{color:'#f58c00',padding:'1rem', textAlign:'center'}}  >
                 <Typography variant="h2">Ripudaman <span style={{color:'#ffa329',margin:'0px', padding:'0 0.5rem 0 5rem'}}>Kaushik</span></Typography>
             </Grid>
             
             <Grid item style={{color:'whitesmoke',margin:'0rem 1rem'}} >
                 <Typography variant='h6' >
                 I am a full-stack developer who loves to code. I am on a constant lookout for fresh ideas to pick up 
                 and new things to learn. Space is my ideal destination, Music is where I wander-in, to get lost and Stories are what help me navigate.
                 A firm believer in the principle "A healthy mind inhabits a healthy body." 
                 My mantra "Eager to Start and Determined to Finish."
                 </Typography>
             </Grid>
         </Grid>
     </Grid>
    )
}

export default AboutMe