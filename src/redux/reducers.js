import { bannerReducer } from "./banner_redux";
import { contactReducer } from "./contact_redux";

const { combineReducers } = require("redux");
const { productreducer } = require("./Products_actions");



const reducer = combineReducers({
    product : productreducer,
    contact : contactReducer,
    banner: bannerReducer
    // reducers
});

export default reducer;
// export default productreducer;