//REACT - бібліотека для створення користувацьких інтерфейсів

class HeaderComponent extends React.Component { // клас це компонент
    render() {//єдиний метод який ми зобов'язані визначити в класі

        console.log(this.props);
        const p = React.createElement('p', {}, 'Super paragraph');
        const h2 = React.createElement('h2', {title: 'Hi'},`Hello ${this.props.name}`); // Title підказка, яка вилазить при наведенні 
        const article = React.createElement('article', {}, h2, p);
        return article; //метод render  - це ОБОВʼЯЗКОВО!!! прописуємо те, яку верстку поверне нам компонента
    }
}

const component = React.createElement(HeaderComponent, {name:'John'});
const component2 = React.createElement(HeaderComponent, {name:'Oleh'});

const parentElement = React.createElement('section',{},component,component2);


const root = document.querySelector('#root');

ReactDOM.render(parentElement, root);


//Props вхідні дані React компонентів що передаються від батьківських до дочірніх компонентів
// Propsам можемо щось передавати ззовні.