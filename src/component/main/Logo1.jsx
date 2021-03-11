import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import React from 'react';
import Media from "react-media";
import { logoData } from './Data';
class Logo1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.wrapper = React.createRef();
    }


    render() {

        return (
            <div ref={this.wrapper}   >
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}  >
                    <Media queries={{
                        small: "(max-width: 599px)",
                        medium: "(min-width: 600px) and (max-width: 1199px)",
                        large: "(min-width: 1200px)"
                    }}>
                        {matches => (
                            <React.Fragment>
                                {matches.small &&
                                    <div style={{ width: '100%', backgroundColor: '#f0f4f8', height: '150px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}  >
                                        <Carousel
                                            addArrowClickHandler
                                            slidesPerPage={2}
                                            slidesPerScroll={1}
                                            animationSpeed={1000}
                                            autoPlay={2000}
                                            stopAutoPlayOnHover
                                            clickToChange
                                            infinite={true}
                                        >

                                            {logoData.map((item, i) => {
                                                return (
                                                    <img src={item.img} alt='img' key={i} />

                                                )
                                            })}
                                        </Carousel>
                                    </div>
                                }
                                {matches.medium &&
                                    <div style={{ width: '100%', backgroundColor: '#f0f4f8', height: '150px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}  >
                                        <Carousel
                                            addArrowClickHandler
                                            slidesPerPage={4}
                                            slidesPerScroll={1}
                                            animationSpeed={1000}
                                            autoPlay={2000}
                                            stopAutoPlayOnHover
                                            clickToChange
                                            infinite={true}
                                        >
                                              {logoData.map((item, i) => {
                                                return (
                                                    <img src={item.img} alt='img' key={i} />

                                                )
                                            })}
                                        </Carousel>
                                    </div>
                                }
                                {matches.large &&
                                    <div style={{ width: '100%', backgroundColor: '#f0f4f8', height: '150px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}  >
                                        <Carousel
                                            addArrowClickHandler
                                            slidesPerPage={6}
                                            slidesPerScroll={1}
                                            animationSpeed={1000}
                                            autoPlay={2000}
                                            stopAutoPlayOnHover
                                            clickToChange
                                            infinite={true}
                                        >
                                             {logoData.map((item, i) => {
                                                return (
                                                    <img src={item.img} alt='img' key={i} />

                                                )
                                            })}
                                        </Carousel>
                                    </div>
                                }




                            </React.Fragment>



                        )}
                    </Media>
                </div>
            </div>
        )
    }
}
export default Logo1;