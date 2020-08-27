import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
     
const useStyle = makeStyles((theme) => ({

    

    header:{
        color: 'whitesmoke',
        opacity: 0.8,
        fontSize: 70,
        fontFamily: '-apple-system, BlinkMacSystemFont',
        fontWeight: 500,
        paddingTop:theme.spacing(5)
    },

    footer:{
        fontSize:48,
        color:'whitesmoke',
        fontWeight:500,
        paddingBottom:theme.spacing(9),
      
    }


}));

function Homepage(){

    const classes= useStyle();

    return(   
        <Grid xs={12} md ={12} lg={12} className='description'>
            <div className="intro">
                <Grow in='true' timeout={3000} >
                    <Typography  variant= 'h1' className={classes.header}>Hi, <span style={{fontSize:'48px'}}>I AM <br/> RIPUDAMAN</span> </Typography>              
                </Grow>
                    
            
                <Typography  variant='h2' className={classes.footer}>
                    Full-Stack Developer
                </Typography>
            </div>
            
                

            
           
        </Grid>
            
                    

               
                
                
            

              
            
        
        
            
            

    )
}

export default Homepage