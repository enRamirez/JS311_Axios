const axios = require('axios');


// .then promises
// https://randomuser.me/api/

const getPerson = () => {


    try {
        const res = axios.get(`https://randomuser.me/api/`)    // this api gets one user
        .then(res => {console.log(res.data.results)})


    } catch (e) {
        console.log("ERROR", e)

    }
}

// console.log(getPerson())

// async/await promise
// star wars api https://swapi.dev/api/people/    <= add an id to get a specific person

const getStarWarsPerson = async (id) => {

    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`)
        console.log(res.data)

    } catch(e) {
        console.log("ERROR", e)
    }

}

// console.log(getStarWarsPerson(1))