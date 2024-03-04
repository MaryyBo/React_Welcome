
/*
1. REACT - бібліотека для створення користувацьких інтерфейсів
2. Можна одночасно використовувати як звичайний ванільний JS, так само як і REACT
3. Props - це дані, які можна передавати в компоненти, для того, щоб налаштовувати зовнішній вигляд Компонент 
4. Щоб REACT нам щось відобразив нам потрбно викликати метод ReactDOM.Render з 2 параметрами( що, і в який елемент)
5. Спрощує роботу з нативним JS та DOM
6. REACT оперує REACT-елементами
7. REACT-елементами - це об'єкт. Він набагато легший ніж той самий елемент у нативному DOMі
8. З цих REACT-елементів, як маленьких блоків складається REACT-компоненти, а з REACT-компонентів складаються сторінки, які будуть бачити наші користувачі
9. State - Стан компонента , це такі дані, які можуть змнінюватись за час життя нашої компоненти
State ---> тільки в конструкторі!
*/

class Counter extends React.Component {
    constructor(props) {
        super(props); //передати props батьківському класу React.Component 
        this.state = { // state - це стан нашого додатку
            count: 0,
            step: 7
        }


    }

    increment5() {
        //to do: state.count++;
        // console.log('click');// щоб побачити в консолі, перевірка

        this.setState({ //треба взяти функцію з React.Component
            count: this.state.count + this.state.step
        })

    }
    increment() {
        //to do: state.count++;
        // console.log('click');// щоб побачити в консолі, перевірка

        this.setState({ //треба взяти функцію з React.Component
            count: this.state.count + 1
        })

    }

    decrement() {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            });
        } else {
            alert('Лічильник не опускається нижче 0')
        }
    }

    render() {
        const counter = React.createElement('h2', {}, `Значення лічильника:${this.state.count}`);
        const step = React.createElement('h2', {}, `Значення кроку:${this.state.step}`);

        const buttonIncrement = React.createElement('button', { onClick: () => { this.increment() } }, '+');
        const buttonDecrement = React.createElement('button', { onClick: () => { this.decrement() } }, '-');
        const increment5 = React.createElement('button', { onClick: () => { this.increment5() } }, '+5');
        return React.createElement(React.Fragment, {}, counter, step, buttonIncrement, buttonDecrement, increment5);;
    }

}

const root = document.querySelector('#root');// знайти в html root
const component = React.createElement(Counter);

ReactDOM.render(component, root);

