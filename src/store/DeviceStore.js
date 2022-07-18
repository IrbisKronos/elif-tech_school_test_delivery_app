import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name:"Mc Donny"},
            {id:2, name:"CFK"},
            {id:3, name:"Pizza Weekend"},
            {id:4, name:"BurgerLord"},
            {id:5, name:"Sensunyaki"},
        ]
        this._items = [
            {id:1, name:"Big Big Burger 1", price:888, img:`https://nevafood.ru/wp-content/uploads/2017/07/burger-ayam.jpg`},
            {id:2, name:"Big Big Burger 2", price:888, img:`https://nevafood.ru/wp-content/uploads/2017/07/burger-ayam.jpg`},
            {id:3, name:"Big Big Burger 3", price:888, img:`https://nevafood.ru/wp-content/uploads/2017/07/burger-ayam.jpg`},
            {id:4, name:"Big Big Burger 4", price:888, img:`https://nevafood.ru/wp-content/uploads/2017/07/burger-ayam.jpg`},
            {id:5, name:"Big Big Burger 5", price:888, img:`https://nevafood.ru/wp-content/uploads/2017/07/burger-ayam.jpg`},
        ]

        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types;
    }
    setItems (items) {
        this._items = items;
    }

    get types() {
        return this._types;
    }
    get items() {
        return this._items
    }
}