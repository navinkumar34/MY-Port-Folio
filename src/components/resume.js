import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';

const Resume = () => {
    return(
        <div>
            <Grid >
                <Cell col={4} >
                    <div style={{textAlign:'center'}}>
                    <img src="https://avatars1.githubusercontent.com/u/61586357?v=4"  alt="avatar" className="avatar-img"/>
                    </div>
                    <h2 style={{paddingTop:'2em'}}>Navin Kumar</h2>
                    <h4 style={{color:'grey'}}>Full Stack Web Developer</h4>
                    <hr style={{borderTop: '3px solid #833fb2' }}/>
                    <p>A self-motivated IT professional with huge knowledge and proficiency in JavaScript, HTML, CSS, React, NodeJS, PostgreSql and MongoDB, as well as strong skills and ability in writing clean and efficient code, seeks the position of Full Stack Web Developer</p>
                    <hr style={{borderTop: '3px solid #833fb2' }}/>
                    <h5>Email:</h5>
                    <p>navinredu@outlook.com</p>
                    <hr style={{borderTop: '3px solid #833fb2' }}/>

                </Cell>
                <Cell className="resume-right-col" col={8}>
                    <h3>Education</h3>
                    <Education startYear='2013' endYear='2017' school='Amity University' schoolDesc='B.Tech in Computer Science and Engineering with CGPA 8.46'/>
                    <Education startYear='2012' endYear='2013' school='CBSE' schoolDesc='Class XII with 90.6 %'/>
                    <Education startYear='2010' endYear='2011' school='CBSE' schoolDesc='Class X with CGPA 10'/>
                    <hr style={{borderTop:'3px solid #e22947'}}/>
                    <h3>Skills</h3>
                    <Skills skill="JavaScript" Progress='80'/>
                    <Skills skill="React" Progress='70'/>
                    <Skills skill="NodeJS" Progress='45'/>
                    <Skills skill="Python" Progress='40'/>
                    <Skills skill="Java" Progress="57"/>
                    <Skills skill="SQL" Progress="65"/>
                </Cell>
            </Grid>
        </div>
    )
}

export default Resume;