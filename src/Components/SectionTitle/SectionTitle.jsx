import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='my-6'>
            <p className='text-green,m-500 text-center text-xl font-semibold'>-- {heading} --</p>
            <h2 className='text-[32px] border-y-2 text-center font-bold uppercase w-72   m-auto my-3 py-1'>{subHeading}</h2>
        </div>
    );
};

export default SectionTitle;