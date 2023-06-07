import {CHECKOUT_BOOKING} from "../types.js";

export const checkoutBooking = (payload) => (dispatch) => {
    dispatch({
        type: CHECKOUT_BOOKING,
        payload: payload,
    });
};