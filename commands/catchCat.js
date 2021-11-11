import {randomInteger} from '../utils/helperFunctions';
import {userGetById} from '../database/userHandler';

let cats = ['Tonkinese', 'Sokoke', 'Egyptian Mau', 'Forest Cat', 'Persian'];
let catsChance = [1,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,5,5];

function try_catch(points) {
    //Get chance for catch
    let chance = randomInteger(1,1000)
    //Check if lucky
    if(points < chance) {
        //Get chance for cat
        let chance2 = randomInteger(1,5)
        try {
            check_catched(cats[chance2]);
            switch(chance2) {
                case 1:
                    if(check_catched(cats[chance2]))
                        return 'Holy shi* you got the Tonkinese! The rarest cat!';
                    return 'You already got the Tonkinese';
                case 2: 
                    if(check_catched(cats[chance2]))
                        return 'Damn you got the Sokoke! The second rarest cat!';
                    return 'You already got the Sokoke';
                case 3:
                    check_catched(cats[chance2]);
                    break;
                case 4:
                    check_catched(cats[chance2]);
                    break;
                case 5:
                    check_catched(cats[chance2]);
                    break
                default:
                    //TODO
            }
        } catch(err) {
            throw new Error(err);
        }
    }   
}

async function check_catched(catName, userId) {
    try{
        //Get user
        const user = await userGetById(userId);
        //Check if found user
        if(user == undefined)
            throw new Error('Could not find user');
        //Loop over cats
        for(const cat of user.cats) {
            //If cat is found, return true
            if(catName == cat)
                return true;
        }
        //If no cat is found, return false
        return false;
    } catch(err) {
        throw new Error('Something wrong happen when getting user')
    }
}

