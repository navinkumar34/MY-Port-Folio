import React from 'react';
import { Grid, Cell } from 'react-mdl';

const Education = ({startYear, endYear, school, schoolDesc}) => {
return(
    <Grid>
        <Cell col={4}>
            <p>{startYear} - {endYear}</p>
        </Cell>
        <Cell col={8}>
            <h4 style={{margin:'0px'}}>{school}</h4>
            <p>{schoolDesc}</p>
        </Cell>
    </Grid>
)
}

export default Education;
