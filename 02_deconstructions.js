// const  {name,surname} = props; <>props.name</> <>{name}</>
// const [name,setName] = useState('ali'); <>{name}</> <button onClick="setName('cansu')">Click Me</button>

// sample
const person = { name: 'ali', surname: 'can', age: 21 }; // construction işlemi
const { name, surname, age } = person; // decontruction
console.log('name', name);

const config = ['www.a.com', 'test@test.com', 21, 54];
const [webSite, email, age2] = config;

// const [, email1, age21] = config;

console.log('webSite', webSite);
console.log('email', email);
console.log('age', age2);
