import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { checkoutBooking } from "store/actions/checkout";
import { useNavigate } from 'react-router-dom'

function ButtonSubmitBooking({ data, ItemDetails }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function fnStartBooking() {
    dispatch(
      checkoutBooking({
        _id: ItemDetails._id,
        duration: data.duration,
        date: {
          startDate: data.date.startDate,
          endDate: data.date.endDate,
        },
      }),
    );
    navigate("/checkout");
  }

  return (
    <>
    <Button className="btn" hasShadow isPrimary isBlock onClick={fnStartBooking}>
      Continue to Book
    </Button>
    </>
  );
}

export default ButtonSubmitBooking;
