// copyright connor 2023
export default class Telemtry 
{
    constructor()
    {
        
    }

    static get EVENTS()
    {
        return 
        {
            DEATH = 0,
            WIN = 1,
            TRAPSETUP = 2
        }
    }

    static get PlAYER_ACTIONS()
    {
        return 
        {
            CROUCH = 0,
            PRONE = 1,
            STANDING_STILL = 2
        }
    }

    static get ENEMY_ACTIONS()
    {
        return
        {
            PATROLLING = 0,
            STANDING = 1,
            CHASING = 2,
            ROOM_CHANGE = 3
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