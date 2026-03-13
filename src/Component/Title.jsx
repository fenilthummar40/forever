import React from "react";

function Title({text1,text2}) {
    return (
        <>
            <div>
                <h1 className='font-lexend sm:text-5xl text-dark text-3xl text-center'>{text1} <br/> <span className='text-white'>{text2}</span></h1>
            </div>
        </>
    );
}

export default Title;
