import Button from "elements/Button";
import { InputDate, InputNumber } from "elements/Form";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { checkoutBooking } from "store/actions/checkout";

function BookingForm_() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({
    duration: 1,
    date: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  });

  const page = useSelector((state) => state.page);
  const { id } = useParams();

  const ItemDetails = page?.[id] || {};

  function updateData(event) {

    let startDate, endDate, duration

    if (event.target.name === "duration") {
      startDate = new Date(data.date.startDate);
      endDate = new Date(data.date.endDate);
      endDate.setDate(startDate.getDate() + +event.target.value)
      endDate = new Date(endDate)
      
      duration = endDate.getDate() - startDate.getDate();
    } else if (event.target.name === "date") {
      startDate = new Date(event.target.value.startDate);
      endDate = new Date(event.target.value.endDate);
      duration = new Date(endDate - startDate).getDate();

    }
    setData((prev) => ({
      ...prev,
      date: {
        ...prev.date,
        startDate, endDate
      },
      duration
    }));
  }

  function startBooking() {
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
    <div className="card bordered card-booking">
      <h4 className="mb-3">Start Booking</h4>
      <h5 className="h2 text-teal mb-4">
        ${ItemDetails?.price} <span className="text-gray-500 font-weight-light">per {ItemDetails?.unit}</span>
      </h5>

      <label htmlFor="duration">How long you will stay?</label>
      <InputNumber max={30} suffix={" night"} isSuffixPlural onChange={updateData} name="duration" value={data.duration} />

      <label htmlFor="date">Pick a date</label>
      <InputDate onChange={updateData} name="date" value={data.date} />

      <h6 className="text-gray-500 font-weigth-light" style={{ marginBottom: 40 }}>
        You will pay <span className="text-gray-900">${ItemDetails.price * data.duration} USD</span> per{" "}
        <span className="text-gray-900">
          {data.duration} {ItemDetails.unit}
        </span>
      </h6>

      <Button className="btn" hasShadow isPrimary isBlock onClick={startBooking}>
        Continue to Book
      </Button>
    </div>
  );
}

export default BookingForm_;
