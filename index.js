//REACT - бібліотека для створення користувацьких інтерфейсів

class HeaderComponent extends React.Component { // клас це компонент
    render() {//єдиний метод який ми зобов'язані визначити в класі
        const p = React.createElement('p', {}, 'Super paragraph');
        const h2 = React.createElement('h2', {title: 'Hi'},'Header');
        const article = React.createElement('article', {}, h2, p);
        return article; //метод render  - це ОБОВʼЯЗКОВО!!! прописуємо те, яку верстку поверне нам компонента
    }
}

const component = React.createElement(HeaderComponent);


const root = document.querySelector('#root');

ReactDOM.render(component, root);