// copyright connor 2023
export default class Config 
{
    constructor()
    {
        // all the configurable data is stored in this data scruct
        // I find this solotion to be more readable because all the 
        // data is part of data, inside of data we have player data 
        // and enemy data, which are both structs and just make sense 
        // to me, these structs contain all the information for each 
        // thing (thing meaning player or enemy)
        this.data =
        {
            playerData:
            {
                speed: 5,
                acceleration: 10,
                turnSpeed: 10,
                crouchSpeedMultiplyer: 0.5,
                proneSpeedMultiplyer: 0.75
            },
            enemyData:
            {
                horizontalFieldOfView: 60,
                verticalFieldOfView: 25,
                gracePeriod: 1,
                waitTime: 5,
                alertDistance: 3,
                boxGrowTime: 5,
                boxLifeTime: 50
            }
        }
    }

    // this guy gets all the property values from a struct
    Values(type)
    {
        return Object.values(type);
    }

    // this guy gets all the property names from a struct
    Names(type)
    {
        let names = [];
        let i = 0;
        for (let name in type)
        {
            names[i] = name;
            ++i;
        }

        return names;
    }
}