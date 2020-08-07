import React from 'react';
import { Grid, Cell } from 'react-mdl';

const Landing = () => {
    return(
        <div style = {{width:'100%', margin:'auto'}}>
            <Grid className='landing-grid'>
                <Cell col={12}>
                    <img src="https://avatars1.githubusercontent.com/u/61586357?v=4"  alt="avatar" className="avatar-img"/>
                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        <hr/>
                        <p> HTML/CSS | JavaScript | React | Express | NodeJS <br/>
                        Java | Python | PostgreSQL | MySQL | MongoDB
                        </p>
                        <div className="social-links">
                            <a href="https://github.com/navinkumar34/" target="_blank" rel="noopener noreferrer">
                                <i class="fa fa-github-square" aria-hidden="true"></i>
                            </a>
                            <a href="https://in.linkedin.com/in/navin-kumar-27a6a7b0" target="_blank" rel="noopener noreferrer">
                                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>

                </Cell> 

            </Grid>
        </div>
    )
}

export default Landing;