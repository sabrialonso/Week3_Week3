import { union, xor, filter, includes, result } from "lodash";
import React from "react"
const Lodash1 = () => {

    // Question 2a - Symmetric Difference

    // const arrOne = [{
    //     id: 20,
    //     name: 'alex'

    // }, {
    //     id: 30,
    //     name: 'alina'
    // }]

    // const arrTwo = [{
    //     id: 40,
    //     name: 'hello'
    // }, {
    //     id: 30,
    //     name: 'world'
    // }]

    // const _ = require('lodash');
    // let xor = _.xorBy(arrOne,arrTwo, 'id' );
    // let xor2 = _.xorBy(arrOne, arrTwo, xor)

    //     // console.log(xor)
    //     console.log(xor2)


    // Question 2b - Find specific value of a key

    // const str = ["u", "ec"]
    // const arr = [
    //   {
    //     storageVal: "u",
    //     table: ["E", "F"],
    //   },
    //   {
    //     storageVal: "data",
    //     id: 3,
    //   },
    //   {
    //     storageVal: "ec",
    //     table: ["E"],
    //   },

    // ];

    // const output = _.filter(arr, ({ storageVal }) => _.includes(str, storageVal));
    // console.log(output)


    //Question 2C - Flattening array

    // const _ = require('lodash')
    // let arr =_.flatten([['E'], ['F']]);
    // console.log(arr);

    //Questionn 2D - Flattening array with Xor and Mix
    // const _ = require('lodash')
    // const t = [['E', 'F'], [['F'], ['G']]]
    // const flat =_.flattenDeep(t[1]);
    // let Xor =_.xor(t[0], flat); 
    // let mix =_.union(Xor,flat);
    // console.log(mix)



    // //     return (

    // //       <></>


    // //        )
    }

    export default Lodash1
