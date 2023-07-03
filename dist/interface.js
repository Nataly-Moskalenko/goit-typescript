"use strict";
class Key {
    constructor() {
        this.signature = Math.floor(Math.random() * 9999);
    }
    getSignature() {
        console.log('This key: ', this.signature);
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    comeIn(person) {
        if (!this.door) {
            throw new Error('Door is close');
        }
        this.tenants.push(person);
        console.log('Person came home');
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (key.getSignature() !== this.key.getSignature()) {
            throw new Error('Key to another door');
        }
        console.log('Door is open');
        return (this.door = true);
    }
}
const key = new Key();
const house = new MyHouse(key);
const onePerson = new Person(key);
house.openDoor(onePerson.getKey());
house.comeIn(onePerson);
//# sourceMappingURL=interface.js.map