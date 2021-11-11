//Returns an integer random number between min (included) and max (included):
export function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}