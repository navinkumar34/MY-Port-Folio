import React, { useState } from 'react';
import { Button, Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions} from 'react-mdl';

const Projects = () => {
    const [activeTab, setActiveTab]= useState(0);
    const toggleCategories = () =>{
        if(activeTab===0){
            return(
                <div className="project-grid">
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'#fff', height:'178px', background:'url(https://reactjs.org/logo-og.png) center / cover'}}>To-Do App</CardTitle>
                        <CardText>A simple To-Do App which allows the user to add and remove tasks, prioritize the task and Update and check the status of task.</CardText>
                        <CardActions style={{ textAlign:"center"}} border>
                            <a href="https://codesandbox.io/s/advanced-todo-app-mdffn" target="_blank" rel="noopener noreferrer"><Button  colored>Code</Button></a>
                            <a href="https://mdffn.csb.app/" target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
                        </CardActions>
                        {/* <CardMenu style={{color:'#fff'}}>
                            <IconButton name='share' />
                        </CardMenu> */}
                    </Card>
                </div>
            )
        }
        else if(activeTab===1){
            return(
                <div className="project-grid">
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'#fff', height:'178px', background:'url(https://img-a.udemycdn.com/course/750x422/1743420_0062.jpg) center / cover'}}>Tic Tac Toe Game</CardTitle>
                        <CardText>A human vs Computer Tic Tic Toe Game implementation</CardText>
                        <CardActions style={{ textAlign:"center"}} border>
                            <a href="https://github.com/navinkumar34/Tic-Tac-Toe-You-vs-Computer-Javascript" target="_blank" rel="noopener noreferrer"><Button colored >Code</Button></a>
                            <a href="https://navinkumar34.github.io/Tic-Tac-Toe-You-vs-Computer-Javascript/" target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'#fff', height:'178px', background:'url(https://img-a.udemycdn.com/course/750x422/1743420_0062.jpg) center / cover'}}>Listing Countries</CardTitle>
                        <CardText>A webpage displaying the various countries in the world along with thier capital and flag.</CardText>
                        <CardActions style={{ textAlign:"center"}} border>
                            <a href="https://github.com/navinkumar34/Listing-Countries" target="_blank" rel="noopener noreferrer"><Button colored >Code</Button></a>
                            <a href="https://navinkumar34.github.io/Listing-Countries/" target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'#fff', height:'178px', background:'url(https://img-a.udemycdn.com/course/750x422/1743420_0062.jpg) center / cover'}}>FreshDesk Ticket Portal</CardTitle>
                        <CardText>A portal that enables to create, view, update and delete tickets and the result is reflected on Freshdesk.</CardText>
                        <CardActions style={{ textAlign:"center"}} border>
                            <a href="https://github.com/navinkumar34/FreshDesk-Ticket-Portal" target="_blank" rel="noopener noreferrer"><Button colored >Code</Button></a>
                            <a href="https://navinkumar34.github.io/FreshDesk-Ticket-Portal/" target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'#fff', height:'178px', background:'url(https://img-a.udemycdn.com/course/750x422/1743420_0062.jpg) center / cover'}}>Self Implementation of Ramda Functions</CardTitle>
                        <CardText>Self Implementation of Ramda Functions using JavaScript</CardText>
                        <CardActions style={{ textAlign:"center"}} border>
                            <a href="https://github.com/navinkumar34/JavaScriptAssignments/blob/master/Self_implemented_ramda_functions.js" target="_blank" rel="noopener noreferrer"><Button colored >Code</Button></a>
                        </CardActions>
                    </Card>

                </div>
            )
        }
        else if(activeTab===2){
            return(
                <div className="project-grid">
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'#fff', height:'178px', background:'url(data:image/png;base64,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'}}>Student Management Website</CardTitle>
                        <CardText>A simple implementation for maintaining student and teacher records using ExpressJS, HandlerBarsJS and PostgreSQL.</CardText>
                        <CardActions style={{ textAlign:"center"}} border>
                            <a href="https://github.com/navinkumar34/Student-Management" target="_blank" rel="noopener noreferrer"><Button  colored>Code</Button></a>
                            <a href="https://kytto.sse.codesandbox.io/" target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'#fff', height:'178px', background:'url(data:image/png;base64,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'}}>Local Library Website</CardTitle>
                        <CardText>Local Library website using Express (Node) and MongoDB.</CardText>
                        <CardActions style={{ textAlign:"center"}} border>
                            <a href="https://github.com/navinkumar34/Local-Library" target="_blank" rel="noopener noreferrer"><Button  colored>Code</Button></a>
                            <a href="https://desolate-bayou-41605.herokuapp.com/catalog" target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
                        </CardActions>
                    </Card>
                </div>
            )
        }
        else{
            return(
                <div className="project-grid">
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'#fff', height:'178px', background:'url(https://getcodify.com/wp-content/uploads/2016/10/Python_logo-600x335.jpg) center / cover'}}>Cab Billing</CardTitle>
                        <CardText>Progarm to implement simple cab billing.</CardText>
                        <CardActions style={{ textAlign:"center"}} border>
                            <a href="https://github.com/navinkumar34/Python_Programs/blob/master/UberBilling.py" target="_blank" rel="noopener noreferrer"><Button  colored>Code</Button></a>
                        </CardActions>
                    </Card>
                </div>
            )
        }

    }
    return(
        <div className="category-tab">
            <Tabs activeTab={activeTab} onChange={(tabId) => setActiveTab(tabId)} ripple>
                <Tab>React</Tab>
                <Tab>JavaScript</Tab>
                <Tab>Express</Tab>
                <Tab>Python</Tab>
            </Tabs> 
                <Grid>
                    <Cell col={12}>
                        <div className="content">{toggleCategories()}</div>
                    </Cell>
                </Grid>         
        </div>
    )
}

export default Projects;