let cats = ['Tonkinese', 'Sokoke', 'Egyptian Mau', 'Forest Cat', 'Persian'];
let catsChance = [1,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,5,5];

function try_catch(points) {
    chance = random.randint(1,100)
    if(points < chance) {
        chance = random.randint(1,5)
        switch(chance) {
            case 1:
                check_catched();
                break; 
            case 2: 
                check_catched();
                break;
            case 3:
                check_catched();
                break;
            case 4:
                check_catched();
                break;
            case 5:
                check_catched();
                break
            default:
                //TODO
        }
    }   
}

function check_catched() {
    
}

