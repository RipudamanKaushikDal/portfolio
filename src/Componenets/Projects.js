import React, { useState,useEffect } from 'react';
import {Box,Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import CardActions  from '@material-ui/core/CardActions';
import axios from "axios"
import {
  Route,
  Link as RouterLink ,
  useRouteMatch
} from "react-router-dom";
import ProjectDetails from './ProjectDetails';


const useStyles=makeStyles({
  projects:{
    height:'100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
  },

  cards:{
    maxWidth:300,
    margin:'3rem auto',
    transition: 'transform 0.4s ease-in-out',
    "&:hover": {
      transform: 'scale(1.07)'
    }
  }
})


function Projects(){
  let {path,url} = useRouteMatch();
  const [projects,setProjects] = useState([]);

  const classes=useStyles();
  const baseUrl = "https://ripudamanprojects.herokuapp.com";

  useEffect(() => {
    axios.get(baseUrl+"/projects")
      .then(resp => {
        console.log(resp.data)
        setProjects(resp.data.reverse())
      }).catch(err => console.log(err))
  },[])
  
    return(
      <Box component='div' className={classes.projects} >
        <Grid container justify='center'>

        
            {projects.map(project => (
             <Grid item xs={12} sm={8} md={6} >
              <Card className={classes.cards}   >
              <CardActionArea component={RouterLink} to={`${url}/${project.title}`}>
                  <CardMedia 
                    style={{height:265}}
                    image={baseUrl+"/images/"+project.images[Math.floor(Math.random()*project.images.length)]}
                    />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {project.title}
                    </Typography>
                  </CardContent>
              </CardActionArea>
              <CardActions>
                {project.Github && (<Button size="medium" target="_blank" color="secondary" href={project.Github}>
                    Github
                </Button>)}
                {project.LinkedIn && (<Button size="medium" target="_blank" color="secondary" href={project.LinkedIn}>
                    LinkedIn
                </Button>)}
              </CardActions>
              </Card>
              </Grid>
            ))}
          
        </Grid>

          
        <Route path={`${path}/:appName`} render={() => <ProjectDetails projects={projects}/>} />


      </Box>

         
            


        
        
    )
}

export default Projects