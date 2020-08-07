import React from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

const Skills = ({skill, Progress} ) =>{
    return(
        <Grid>
            <Cell col={12}>
                <div style={{display:'flex'}}>{skill} <ProgressBar style={{margin:'auto' , width:'75%'}} progress={Progress}/> </div>
            </Cell>
        </Grid>
    )

}

export default Skills;