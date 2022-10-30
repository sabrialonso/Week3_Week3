import React, { useState } from "react";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";

// Create an array of object and update its second index
const Hooks = () => {
    const oldArray = [
        { id: 1, Food: 'Chicken Rice' },
        { id: 2, Food: 'Pasta' },
        { id: 3, Food: 'Masala' },
        { id: 4, Food: 'Borscht' },
        { id: 5, Food: 'Pancake' },
    ];

    const [data, setData] = useState(oldArray);

    const newArray = () => {
        const updateArray = data.map(obj => {
            if (obj.id === 2) {
                return { ...obj, Food: 'Aglio Olio' };
            }
            return obj;
        });

        setData(updateArray);
    };

    return (
        <div>
            <h2>Question 3a</h2>
            <Button variant="outlined" onClick={newArray}>Update state</Button> <br></br>

            {data.map(obj => {
                return (
                    <>

                        <div key={obj.id}><br></br>


                            <Stack direction="horizontal" gap={2}>
                                <div className="bg-light border">Food Menu: {obj.id}</div>
                                <div className="bg-light border">{obj.Food}</div>
                            </Stack>



                        </div>

                    </>

                );

            })}
        </div>
    );
};

export default Hooks;
