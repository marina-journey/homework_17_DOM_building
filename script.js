const units = [
    new Unit('infantryman', 100, 50),
    new Unit('pilot', 50, 100),
    new Unit('sniper', 40, 70)
];

const squad = new Squad(units, document.querySelector('#squad'));
console.log(squad);