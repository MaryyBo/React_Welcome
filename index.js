

class HeaderComponent extends React.Component { // клас це компонент
    render() {//єдиний метод який ми зобов'язані визначити в класі

        console.log(this.props);
        const p = React.createElement('p', {}, 'Super paragraph');
        const h2 = React.createElement('h2', {title: 'Hi'},`Hello ${this.props.name}`); // Title підказка, яка вилазить при наведенні 
        const article = React.createElement('article', {}, h2, p);
        return article; //метод render  - це ОБОВʼЯЗКОВО!!! прописуємо те, яку верстку поверне нам компонента
    }
}

const component = React.createElement(HeaderComponent, {name:'John'}, 'Text---> John');
const component2 = React.createElement(HeaderComponent, {name:'Oleh'},  'Text---> Oleh');

const parentElement = React.createElement('section',{},component,component2);


const root = document.querySelector('#root');

ReactDOM.render(parentElement, root);


//Props вхідні дані React компонентів що передаються від батьківських до дочірніх компонентів
// Propsам можемо щось передавати ззовні.


/*Зробіть класову компоненту,
 яка приймає через props ім'я людини і повертає h1 
 з текстом "Привіт, ім'я_яке_вам_передали"*/

// class HelloComp extends React.Component {
//  render() {
//     const h1 = React.createElement('h1', {},`Hello ${this.props.name}`);
//     return h1;
//  }
// }

// const hello = React.createElement(HelloComp, {name:'Maryna'});

// ReactDOM.render(hello, root);

// const root = document.querySelector('#root');



/*
1. REACT - бібліотека для створення користувацьких інтерфейсів
2. Можна одночасно використовувати як звичайний ванільний JS, так само як і REACT
3. Props - це дані, які можна передавати в компоненти, для того, щоб налаштовувати зовнішній вигляд Компонент 
4. Щоб REACT нам щось відобразив нам потрбно викликати метод ReactDOM.Render з 2 параметрами( що, і в який елемент)
5. Спрощує роботу з нативним JS та DOM
6. REACT оперує REACT-елементами
7. REACT-елементами - це об'єкт. Він набагато легший ніж той самий елемент у нативному DOMі
8. З цих REACT-елементів, як маленьких блоків складається REACT-компоненти, а з REACT-компонентів складаються сторінки, які будуть бачити наші користувачі
*/