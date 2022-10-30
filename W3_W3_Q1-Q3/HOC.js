import React from "react";

const HOC = (Prospect) => {
    console.log(Prospect);
    // const color = ['red', 'green', 'purple', '#FD841F', '#E14D2A'];
    const randomizeColor = '#'+Math.floor(Math.random()*16777215).toString(16);


    return () => {
        
        return (
            <>
            
            <div style={{ backgroundColor: randomizeColor }}>
                <Prospect />
            </div>
            </>
        )
    }

}

export default HOC
