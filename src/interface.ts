class Key {
  private signature: number;

  constructor() {
    this.signature = Math.floor(Math.random() * 9999);
  }

  getSignature(): number {
    console.log('This key: ', this.signature);
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door = false;
  private tenants: Person[] = [];
  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (!this.door) {
      throw new Error('Door is close');
    }

    this.tenants.push(person);
    console.log('Person came home');
  }

  abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  openDoor(key: Key) {
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
