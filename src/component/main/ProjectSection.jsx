import React from 'react';
import Context from '../../assets/js/context';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ExploreIcon from '@material-ui/icons/Explore';
class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {


            data: [
                {
                    "img": require('../../assets/img/nirvana.jpg'),

                    "name": "Android Applications",
                    "desc": "Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.",
                },
                {
                    "img": require('../../assets/img/qualia.jpg'),

                    "name": "IOS Applications",
                    "desc": "Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.",
                },
                {
                    "img": require('../../assets/img/nirvana.jpg'),

                    "name": "Desktop Applications",
                    "desc": "Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.",
                },
                {
                    "img":  require('../../assets/img/qualia.jpg'),

                    "name": "Web Applications",
                    "desc": "Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.",
                },
              

            ]
        }
    }


    render() {

        return (
            <Context.Consumer>
                {ctx => {
                    return (
                        <div id='project_bgb' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>

                            <div id='ServicesContainer'  >
                                <div style={{ marginBottom: '3%' }} >
                                    <ScrollAnimation animateIn='flipInX'
                                        animateOut='flipOutX' >
                                        <span className='hometab-heading'  > Latest Projects</span>

                                    </ScrollAnimation>
                                </div>
                                <div id='mainServices' >
                                    {this.state.data.map(((item, i) =>
                                        i <= 3 ? (
                                            <div id='mainCardProject'  >
                                                <div id='card' key={i} >
                                                    <div id='details'>

                                                        <div style={{ padding: '14px' }} id='concepttext' >{item.desc}</div>
                                                        <div id='projectIcon' > 
                                                        <ExploreIcon /> 
                                                        BROWSE
                                                        </div>
                                                    </div>
                                                    <div id='imgBox'> <img src={item.img} alt='img' />   </div>


                                                </div>
                                                <div id='project_title'  >{item.name}</div>
                                            </div>

                                        ) : (null)


                                    ))}
                                </div>
                                <Link to='/Project' id='btn' >
                                    <div id='getInbtn' style={{ backgroundColor: 'rgb(211 227 239)' }} >
                                        <span>  See All Projects  <ArrowRightAltIcon /> </span>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}
export default Projects;