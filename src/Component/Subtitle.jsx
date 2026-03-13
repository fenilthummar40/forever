import React from "react";

function Subtitle({text1}) {
    return (
        <>
            <div>
                <h1 className='font-lexend font-medium sm:text-3xl text-2xl ps-5 dark:text-white'>{text1}</h1>
            </div>
        </>
    );
}

export default Subtitle;
