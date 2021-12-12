import React , {useEffect}from 'react'
import axios from 'axios'

const ApiStarWars = () => {
    useEffect(async ()=>{
        // const data = await axios.get('https://swapi.dev/api/')
        // const dataFilms = await axios.get("https://swapi.dev/api/films/")
        const dataPeopleAPI = await axios.get('https://swapi.dev/api/people')
        const dataPlanetsAPI = await axios.get('https://swapi.dev/api/planets')
        // const dataSpecies = await axios.get('https://swapi.dev/api/species')
        // const dataStarships = await axios.get('https://swapi.dev/api/starships')
        // const dataVehiclesAPI = await axios.get('https://swapi.dev/api/vehicles')
        // console.log(dataFilms)

        //PEOPLE DATA
        const objPeople = []
        dataPeopleAPI.data.results.map((peoples)=>{
            objPeople.push({"name":peoples.name,"planet": checkPlanetName(peoples.homeworld.split('/')[5],dataPlanetsAPI)})
        })
        // console.log(dataPeopleAPI.data)
        // console.log(dataPlanetsAPI.data.next)
        // console.log(dataPlanetsAPI)

        const chackPages = (async(planets)=>{
      
              console.log(planets)
            

            
        })
        chackPages(dataPlanetsAPI)

         function checkPlanetName(idPeople, planets)
         {   
           
      
         }
        //  console.log(objPeople)
        // console.log(dataPeopleAPI.data.results) s.homeworld.split('/')[5] == ?planet.name 

        //PLANETS DATA
       //--Cereate a Array planets--//
        const planet = dataPlanetsAPI.data.results.map((planet)=>{
            const buildPlanet = {"name":planet.name,"population":planet.population,
            ["id"]:planet.residents}

            return buildPlanet
        })
        // console.log(planet)
        //--Set The ID of People's planets (URL --> Char) -- New Array "PlanetWithID"//
        const planetWithID = planet.map((eachPl)=>{
            const newArrID = eachPl.id.map( idUrl =>{ 
                idUrl = idUrl.split('/')[5];
                return idUrl
                }) 
            eachPl.id = newArrID
            return eachPl
        })
       const relateSum = planetWithID.map(planetPeople =>{
           const sum = {}
            planetPeople.id.map((id)=>{})
        })


       },[])

    return (
        <div>
            
        </div>
    )
}

export default ApiStarWars
