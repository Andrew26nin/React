import React, { Component} from 'react';

import Slide_1 from '../img/slide1.png';
import Slide_2 from '../img/slide2.png';
import Slide_3 from '../img/slide3.png';
import Slide_4 from '../img/slide4.png';

class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state={
            slides:[
                {
                    eachSlide: `url(${Slide_1})`
                },
                {
                    eachSlide: `url(${Slide_2})`
                },
                {
                    eachSlide: `url(${Slide_3})`
                },
                {
                    eachSlide: `url(${Slide_4})`
                }
            ],
            autoplay:false,
            active:0,
            max:0
        }
        this.state.max=this.state.slides.length;
    }
}