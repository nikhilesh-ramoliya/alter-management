const GETPRODUCTS  = 'GETPRODUCTS';
const DELETEPRODUCTS = 'DELETEPRODUCTS';
const ADDPRODUCTS = 'ADDPRODUCTS';
const UPDATEPRODUCTS = 'UPDATEPRODUCTS';


export const getproduct = (products) => {
    return {
        type: GETPRODUCTS,
        products
    }
}

export const deleteproduct = (id) => { 
    return {
        type: DELETEPRODUCTS,
        id
    }
}
export const addproduct = (product) => {
    return {
        type: ADDPRODUCTS,
        product
    }
}

export const updateproduct = (product) => {
    return {
        type: UPDATEPRODUCTS,
        product
    }
}

export const productreducer = (state = [], action) => {
    switch (action.type) {
        case GETPRODUCTS:
            return action.products;
        case DELETEPRODUCTS:
            return state.filter(product => product.id !== action.id);
        case ADDPRODUCTS:
            return [...state, action.product];
        case UPDATEPRODUCTS:
            return state.map(product => product.id === action.product.id ? action.product : product);
        default:
            return state;
    }
}
