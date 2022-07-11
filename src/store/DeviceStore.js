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
            {id:1, name:"Big Big Burger 1", price:888, img:`https://www.mcdonalds.com/content/dam/ua/nutrition/nfl-product/product/regular/Sdwch_Cheeseburger.png`},
            {id:2, name:"Big Big Burger 1", price:888, img:`https://www.mcdonalds.com/content/dam/ua/nutrition/nfl-product/product/regular/Sdwch_Cheeseburger.png`},
            {id:3, name:"Big Big Burger 1", price:888, img:`https://www.mcdonalds.com/content/dam/ua/nutrition/nfl-product/product/regular/Sdwch_Cheeseburger.png`},
            {id:4, name:"Big Big Burger 1", price:888, img:`https://www.mcdonalds.com/content/dam/ua/nutrition/nfl-product/product/regular/Sdwch_Cheeseburger.png`},
            {id:5, name:"Big Big Burger 1", price:888, img:`https://www.mcdonalds.com/content/dam/ua/nutrition/nfl-product/product/regular/Sdwch_Cheeseburger.png`},
        ]
        this._selectedType = {} //action status
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types;
    }
    setItems (items) {
        this._items = items;
    }
    setSelectedType (type) {
        this._selectedType = type;
    }

    get types() {
        return this._types;
    }
    get items() {
        return this._items
    }
    get selectedType() {
         return this._selectedType //action
    }
}