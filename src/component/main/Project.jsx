import React from 'react';
import Context from '../../assets/js/context';
import ScrollAnimation from 'react-animate-on-scroll';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LaptopWindowsIcon from '@material-ui/icons/LaptopWindows';
import SettingsIcon from '@material-ui/icons/Settings';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DvrIcon from '@material-ui/icons/Dvr';
import NavBar from './common/NavBar'; 
import Footer from './common/Footer';
import Particles from 'react-particles-js';
import ExploreIcon from '@material-ui/icons/Explore';
class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {


            data: [
                {
                    "img": <PhoneAndroidIcon style={{ fontSize: 40 }} />,

                    "name": "Android Applications",
                    "desc": "Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.",
                },
                {
                    "img": <PhoneIphoneIcon style={{ fontSize: 40 }} />,

                    "name": "IOS Applications",
                    "desc": "Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.",
                },
                {
                    "img": <LaptopWindowsIcon style={{ fontSize: 40 }} />,

                    "name": "Desktop Applications",
                    "desc": "Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.",
                },
                {
                    "img": <DvrIcon style={{ fontSize: 40 }} />,

                    "name": "Web Applications",
                    "desc": "Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.",
                },
                {
                    "img": <CloudUploadIcon style={{ fontSize: 40 }} />,

                    "name": "Cloud Development",
                    "desc": "Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.",
                },
                {
                    "img": <SettingsIcon style={{ fontSize: 40 }} />,

                    "name": "Corporate Solution",
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
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                             <NavBar />
                            <div id='project_bgb2' >
                                <Particles style={{ position: 'absolute' }}
                                    params={{
                                        particles: {
                                            number: {
                                                value: 200,
                                                density: {
                                                    enable: true,
                                                    value_area: 2000,
                                                }
                                            },
                                            shape: {
                                                type: "circle",
                                                stroke: {
                                                    "width": 2,
                                                    "color": "#fff"
                                                }
                                            },
                                        }
                                    }}
                                />
                            </div>
                            <div id='ServicesContainer'  >
                                <div style={{ marginBottom: '3%' }} >
                                    <ScrollAnimation animateIn='flipInX'
                                        animateOut='flipOutX' >
                                        <span className='hometab-heading'  > OUR WORKS</span>

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
                                                    <div id='imgBox'> <img src={require('../../assets/img/home007.jpg')} alt='img' />   </div>


                                                </div>
                                                <div id='project_title'  >{item.name}</div>
                                            </div>

                                        ) : (null)


                                    ))}
                                </div>
                              
                            </div>
                            <Footer />
                        </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}
export default Project;