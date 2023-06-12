const button = document.querySelector('button')! as HTMLButtonElement;
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;
function add(num1: number, num2: number) {
  return num1 + num2;
}
button.addEventListener('click', function () {
  console.log(add(+input1.value, +input2.value));
});

let age: number = 50;
let newName: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number) => {
  return 100 + a;
};
// let callback = (a: number) => number;
// callback = (a) => { return 100 + a };

let anything: any = -20;
anything = 'Text';
anything = {};

let some: unknown;
some = 'Text';
let str: string;
if (typeof some === 'string') {
  str = some;
}

let person: [string, number] = ['Max', 21];

// Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
enum Status {
  LOADING,
  READY,
}
const program = {
  status: Status.READY,
};
// Зробіть змінну, яка може приймати або рядок, або число.
let newVar: string | number = 20;

// Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
let able: 'enable' | 'disable' = 'enable';

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

type DataPage = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1 = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  },
};

const page2 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};
