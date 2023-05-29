// copyright connor 2023
export default class Telemtry 
{
    constructor()
    {
        this.data =
        {
            playerData:
            {
                crouchedTime: 0.0,
                proneTime: 52.03,
                timeSpentStationary: 0.26,
                totoalPlayTime: 316.36
            },
            enemyData:
            {
                patrolTime: 298.22,
                chaseTime: 0.0,
                endTime: 18.58,
                waitingTime: 0.0,
                timeInLab: 13.10,
                timeInCafeteria: 46.73,
                timeInWarehouse: 256.53
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