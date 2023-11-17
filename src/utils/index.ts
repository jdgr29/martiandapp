export function generateUuid() {
    return Math.random().toString() +
        Math.random().toString() +
        Math.random().toString() +
        Math.random()*Math.random()*1000;
}