// copyright connor 2023
export default class Config 
{
    constructor()
    {
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

    Values(type)
    {
        return Object.values(type);
    }

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