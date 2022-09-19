import React from "react";
import OrderDetailInfo from "./OrderDetailInfo";
import OrderDetailProduct from "./OrderDetailProduct";
import { Link } from "react-router-dom";
const OrderDetailmain = () => {
  return (
    <section className="content-main">
      <div className="content-header">
        <Link to="/orders" className="btn btn-dark text-white">
          Back To Orders
        </Link>
      </div>

      <div className="card">
        <header className="card-header p-3 Header-green">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <span>
                <i className="far fa-calendar-alt mx-2"></i>
                <b className="text-white">Dec 12 2021</b>
              </span>
              <br />
              <small className="text-white mx-3">Order ID : 123456</small>
            </div>
            <div className="col-lg-6 col-md-6 ms-auto d-flex justify-content-end align-items-center">
              <select
                className="form-select d-inline-block"
                style={{ maxWidth: "200px" }}
              >
                <option>Change status</option>
                <option>Awaiting payment</option>
                <option>Confirmed</option>
                <option>Delivered</option>
              </select>
              <Link to="#" className="btn btn-success ms-2">
                <i className="fas fa-print"></i>
              </Link>
            </div>
          </div>
        </header>
        <div className="card-body">
          {/* Order info */}
          <OrderDetailInfo />

          <div className="row">
            <div className="col-lg-9">
              <div className="table-responsive">
                <OrderDetailProduct />
              </div>
            </div>

            {/* Payment Info */}
            <div className="col-lg-3">
              <div className="box shadow-sm bg-light">
                <button className="btn btn-dark col-12">
                  Mask As delivered
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetailmain;
