import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

const Contact = () => {
    return(
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Navin Kumar</h2>
                    <img src="https://avatars1.githubusercontent.com/u/61586357?v=4"  alt="avatar" className="avatar-img"/>
                    <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>
                        I am a Full Stack Web Developer
                    </p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact</h2>
                    <hr/>
                    <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                    <i className='fa fa-envelope' aria-hidden="true"/>
                                    navinredu@outlook.com
                                </ListItemContent>
                            </ListItem>
                        </List>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}

export default Contact;