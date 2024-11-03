import { useState } from "react";

export default function BookingService({
  bookingTitle,
  timeAndPrice,
  serviceName,
  children,
  innerChildren,
}) {
  return (
    <div className="card card-appointment">
      <div className="row jc-sb ai-cen gap-half fw-wrap ac-cen">
        <div>
          <p
            className="lg bold title"
            dangerouslySetInnerHTML={{ __html: bookingTitle }}
          ></p>
          <p className="small margin-bs-quarter">{timeAndPrice}</p>
        </div>
        <button className="btn-primary btn-booking">Book</button>
      </div>
      <div className="card-content">
        {children}
        {innerChildren && (
          <div className="margin-bs-1 card-inner">
            <p className="lg bold">{serviceName}</p>
            {innerChildren}
          </div>
        )}
      </div>
    </div>
  );
}
