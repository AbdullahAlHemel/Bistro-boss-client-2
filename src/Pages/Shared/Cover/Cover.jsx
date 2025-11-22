import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({img, img1, title}) => {
    return (
        <Parallax
        className='h-[500px]'
        blur={{ min: -15, max: 15 }}
        bgImage={img1}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div>
            <div className="hero h-[300px] my-[80px] rounded-xl m-auto w-[700PX]" style={{backgroundImage: `url('${img}')`}}>
                <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Order</button>
                    </div>
                </div>
             </div> 
        </div>    </Parallax>
        
    );
};

export default Cover;