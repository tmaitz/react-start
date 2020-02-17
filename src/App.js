import React, { Component } from 'react'

class App extends Component {
  state = {
    // изначальное состояние компонента
  }

  roll = () => {
    const rc = () => Math.floor(Math.random() * Math.floor(10))
    return `${rc()}${rc()}${rc()}`
  }

  render () {
    return (
      <div>
        <div>
          Удали содержимое return. И напиши нормальный компонент.
        </div>
        <div>
          Предлагается реализовать самодостаточное казино.
        </div>
        <div>
          Уже реализована функция roll, которая возвращает результат работы однорукого бандита.
        </div>
        <div>
          Необходимо отобразить:
        </div>
        <div>
          * результат работы однорукого бандита
        </div>
        <div>
          * кнопку - а-ля рычаг однорукого бандита (стоимость работы однорукого бандита - 10 рублей)
        </div>
        <div>
          * текущий депозит пользователя (бабосики)
        </div>
        <div>
          * кнопку доната (+ 20 рублей)
        </div>
        <div>
          Если в результате работы однорукого бандита в числе есть 2 совпадающие цифры, то пользователь получает 5
          рублей в депозит
        </div>
        <div>
          Если в результате работы однорукого бандита в числе есть 3 совпадающие цифры, то пользователь получает 50
          рублей в депозит
        </div>
        <div>
          Если в результате работы однорукого бандита в числе есть 3 совпадающие цифры и это 777, то пользователь
          получает 500 рублей в депозит

        </div>
      </div>
    )
  }
}

export default App
