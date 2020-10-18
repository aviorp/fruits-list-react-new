const {
    default: produce
} = require("immer");

const initialState = {
    fruits: [{
            id: 1,
            name: 'Apple',
            image: 'https://tinyurl.com/y5x5dlw4',
            origin: 'Japan',
            year: 1948,
            isFavorite: false,
            nutrition: [{
                title: 'Calories',
                value: 123
            }, {
                title: 'Sugar',
                value: 30
            }, {
                title: 'Dietary Fiber',
                value: 4.1
            }, {
                title: "Protien",
                value: 1.6
            }]
        },
        {
            id: 2,
            name: 'Banana',
            image: 'https://tinyurl.com/yyuv98p8',
            origin: 'Africa',
            year: 1968,
            isFavorite: false,
            nutrition: [{
                title: 'Calories',
                value: 456
            }, {
                title: 'Sugar',
                value: 40
            }, {
                title: 'Dietary Fiber',
                value: 3.9
            }, {
                title: "Protien",
                value: 2.6
            }]
        },
        {
            id: 3,
            name: 'Watermelon',
            image: 'https://tinyurl.com/yxbjxtxl',
            origin: 'Israel',
            year: 1997,
            isFavorite: false,
            nutrition: [{
                title: 'Calories',
                value: 789
            }, {
                title: 'Sugar',
                value: 50
            }, {
                title: 'Dietary Fiber',
                value: 8.9
            }, {
                title: "Protien",
                value: 3.6
            }]
        },
    ],
    favorites: [],
    selectedFruit: {},
}


export const fruitReducer = (state = initialState, action) => {
    let fruitIndex = state.fruits.findIndex(fruit => fruit.id === action.id);
    let fruitFavoriteIndex = state.favorites.findIndex(fruit => fruit.id === action.id);
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
            if (fruitIndex !== -1) {
                return {
                    ...state,
                    favorites: [...state.favorites, ...state.fruits.filter(el => el.id === action.id)],
                    fruits: [...state.fruits.slice(0, fruitIndex), ...state.fruits.slice(fruitIndex + 1)],
                }
            } else {
                return {
                    ...state,
                    fruits: [...state.fruits, ...state.favorites.filter(el => el.id === action.id)],
                    favorites: [...state.favorites.slice(0, fruitFavoriteIndex), ...state.favorites.slice(fruitFavoriteIndex + 1)],
                }
            }

            case 'SELECT_FRUIT':
                return {
                    ...state,
                    selectedFruit: action.fruit,
                }
                case 'EDIT_NUTRITION':
                 return state
                    default:
                        return state;
    }
}