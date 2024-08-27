import React, { useState } from 'react'
import Brands from './components/Brands'
import Link from 'next/link';

function shop() {
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
    <style>
        {`
        .accordion .collapse {
  display: none;
  transition: all 1s ease-in-out;
}

.accordion .show {
  display: block;
  transition: all 1s ease-in-out;
}

.accordion .fa-chevron-circle-down,
.accordion .fa-chevron-circle-up {
  transition: transform 1s ease;
}
li .text-decoration-none{
color:#000 ;
}
        `}
    </style>
  {/* Start Content */}
  <div className="container py-5">
    <div className="row">
      <div className="col-lg-3">
        <h1 className="h2 pb-4">Categories</h1>
        <ul className="accordion list-unstyled">
      {/* Gender Accordion */}
      <li className="pb-3">
        <div
          className="d-flex justify-content-between h3 text-decoration-none"
          onClick={() => toggleAccordion(0)}
        >
          Gender
          <i className={`fa fa-fw fa-chevron-circle-${activeIndex === 0 ? 'up' : 'down'} mt-1`} />
        </div>
        <ul className={`collapse list-unstyled pl-3 ${activeIndex === 0 ? 'show' : ''}`}>
          <li>
            <Link className="text-decoration-none" href="#">
              Men
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" href="#">
              Women
            </Link>
          </li>
        </ul>
      </li>

      {/* Sale Accordion */}
      <li className="pb-3">
        <div
          className="d-flex justify-content-between h3 text-decoration-none"
          onClick={() => toggleAccordion(1)}
        >
          Sale
          <i className={`fa fa-fw fa-chevron-circle-${activeIndex === 1 ? 'up' : 'down'} mt-1`} />
        </div>
        <ul className={`collapse list-unstyled pl-3 ${activeIndex === 1 ? 'show' : ''}`}>
          <li>
            <Link className="text-decoration-none" href="#">
              Sport
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" href="#">
              Luxury
            </Link>
          </li>
        </ul>
      </li>

      {/* Product Accordion */}
      <li className="pb-3">
        <div
          className="d-flex justify-content-between h3 text-decoration-none"
          onClick={() => toggleAccordion(2)}
        >
          Product
          <i className={`fa fa-fw fa-chevron-circle-${activeIndex === 2 ? 'up' : 'down'} mt-1`} />
        </div>
        <ul className={`collapse list-unstyled pl-3 ${activeIndex === 2 ? 'show' : ''}`}>
          <li>
            <Link className="text-decoration-none" href="#">
              Bag
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" href="#">
              Sweater
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" href="#">
              Sunglass
            </Link>
          </li>
        </ul>
      </li>
    </ul>

      </div>
      <div className="col-lg-9">
        <div className="row">
          <div className="col-md-6">
            <ul className="list-inline shop-top-menu pb-3 pt-1">
              <li className="list-inline-item">
                <Link className="h3 text-dark text-decoration-none mr-3" href="#">
                  All
                </Link>
              </li>
              <li className="list-inline-item">
                <Link className="h3 text-dark text-decoration-none mr-3" href="#">
                  Men's
                </Link>
              </li>
              <li className="list-inline-item">
                <Link className="h3 text-dark text-decoration-none" href="#">
                  Women's
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 pb-4">
            <div className="d-flex">
              <select className="form-control">
                <option>Featured</option>
                <option>A to Z</option>
                <option>Item</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
              <div className="card rounded-0">
                <img
                  className="card-img rounded-0 img-fluid"
                  src="assets/img/shop_01.jpg"
                />
                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="btn btn-success text-white"
                        href="/shop-single"
                      >
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-success text-white mt-2"
                        href="/shop-single"
                      >
                        <i className="far fa-eye" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-success text-white mt-2"
                        href="/shop-single"
                      >
                        <i className="fas fa-cart-plus" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                <Link href="/shop-single" className="h3 text-decoration-none">
                  Oupidatat non
                </Link>
                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                  <li>M/L/X/XL</li>
                  <li className="pt-2">
                    <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                  </li>
                </ul>
                <ul className="list-unstyled d-flex justify-content-center mb-1">
                  <li>
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-muted fa fa-star" />
                    <i className="text-muted fa fa-star" />
                  </li>
                </ul>
                <p className="text-center mb-0">$250.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
              <div className="card rounded-0">
                <img
                  className="card-img rounded-0 img-fluid"
                  src="assets/img/shop_02.jpg"
                />
                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="btn btn-success text-white"
                        href="/shop-single"
                      >
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-success text-white mt-2"
                        href="/shop-single"
                      >
                        <i className="far fa-eye" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-success text-white mt-2"
                        href="/shop-single"
                      >
                        <i className="fas fa-cart-plus" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                <Link href="/shop-single" className="h3 text-decoration-none">
                  Oupidatat non
                </Link>
                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                  <li>M/L/X/XL</li>
                  <li className="pt-2">
                    <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                  </li>
                </ul>
                <ul className="list-unstyled d-flex justify-content-center mb-1">
                  <li>
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-muted fa fa-star" />
                    <i className="text-muted fa fa-star" />
                  </li>
                </ul>
                <p className="text-center mb-0">$250.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
              <div className="card rounded-0">
                <img
                  className="card-img rounded-0 img-fluid"
                  src="assets/img/shop_03.jpg"
                />
                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="btn btn-success text-white"
                        href="/shop-single"
                      >
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-success text-white mt-2"
                        href="/shop-single"
                      >
                        <i className="far fa-eye" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-success text-white mt-2"
                        href="/shop-single"
                      >
                        <i className="fas fa-cart-plus" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                <Link href="/shop-single" className="h3 text-decoration-none">
                  Oupidatat non
                </Link>
                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                  <li>M/L/X/XL</li>
                  <li className="pt-2">
                    <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                  </li>
                </ul>
                <ul className="list-unstyled d-flex justify-content-center mb-1">
                  <li>
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-muted fa fa-star" />
                    <i className="text-muted fa fa-star" />
                  </li>
                </ul>
                <p className="text-center mb-0">$250.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
              <div className="card rounded-0">
                <img
                  className="card-img rounded-0 img-fluid"
                  src="assets/img/shop_04.jpg"
                />
                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="btn btn-success text-white"
                        href="/shop-single"
                      >
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-success text-white mt-2"
                        href="/shop-single"
                      >
                        <i className="far fa-eye" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-success text-white mt-2"
                        href="/shop-single"
                      >
                        <i className="fas fa-cart-plus" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                <Link href="/shop-single" className="h3 text-decoration-none">
                  Oupidatat non
                </Link>
                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                  <li>M/L/X/XL</li>
                  <li className="pt-2">
                    <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                  </li>
                </ul>
                <ul className="list-unstyled d-flex justify-content-center mb-1">
                  <li>
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-muted fa fa-star" />
                    <i className="text-muted fa fa-star" />
                  </li>
                </ul>
                <p className="text-center mb-0">$250.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
              <div className="card rounded-0">
                <img
                  className="card-img rounded-0 img-fluid"
                  src="assets/img/shop_05.jpg"
                />
                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="btn btn-success text-white"
                        href="/shop-single"
                      >
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-success text-white mt-2"
                        href="/shop-single"
                      >
                        <i className="far fa-eye" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-success text-white mt-2"
                        href="/shop-single"
                      >
                        <i className="fas fa-cart-plus" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                <Link href="/shop-single" className="h3 text-decoration-none">
                  Oupidatat non
                </Link>
                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                  <li>M/L/X/XL</li>
                  <li className="pt-2">
                    <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                  </li>
                </ul>
                <ul className="list-unstyled d-flex justify-content-center mb-1">
                  <li>
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-muted fa fa-star" />
                    <i className="text-muted fa fa-star" />
                  </li>
                </ul>
                <p className="text-center mb-0">$250.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
              <div className="card rounded-0">
                <img
                  className="card-img rounded-0 img-fluid"
                  src="assets/img/shop_06.jpg"
                />
                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="btn btn-success text-white"
                        href="/shop-single"
                      >
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-success text-white mt-2"
                        href="/shop-single"
                      >
                        <i className="far fa-eye" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-success text-white mt-2"
                        href="/shop-single"
                      >
                        <i className="fas fa-cart-plus" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                <Link href="/shop-single" className="h3 text-decoration-none">
                  Oupidatat non
                </Link>
                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                  <li>M/L/X/XL</li>
                  <li className="pt-2">
                    <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                  </li>
                </ul>
                <ul className="list-unstyled d-flex justify-content-center mb-1">
                  <li>
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-muted fa fa-star" />
                    <i className="text-muted fa fa-star" />
                  </li>
                </ul>
                <p className="text-center mb-0">$250.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
              <div className="card rounded-0">
                <img
                  className="card-img rounded-0 img-fluid"
                  src="assets/img/shop_07.jpg"
                />
                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="btn btn-success text-white"
                        href="/shop-single"
                      >
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-success text-white mt-2"
                        href="/shop-single"
                      >
                        <i className="far fa-eye" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-success text-white mt-2"
                        href="/shop-single"
                      >
                        <i className="fas fa-cart-plus" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                <Link href="/shop-single" className="h3 text-decoration-none">
                  Oupidatat non
                </Link>
                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                  <li>M/L/X/XL</li>
                  <li className="pt-2">
                    <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                  </li>
                </ul>
                <ul className="list-unstyled d-flex justify-content-center mb-1">
                  <li>
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-muted fa fa-star" />
                    <i className="text-muted fa fa-star" />
                  </li>
                </ul>
                <p className="text-center mb-0">$250.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
              <div className="card rounded-0">
                <img
                  className="card-img rounded-0 img-fluid"
                  src="assets/img/shop_08.jpg"
                />
                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="btn btn-success text-white"
                        href="/shop-single"
                      >
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-success text-white mt-2"
                        href="/shop-single"
                      >
                        <i className="far fa-eye" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-success text-white mt-2"
                        href="/shop-single"
                      >
                        <i className="fas fa-cart-plus" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                <Link href="/shop-single" className="h3 text-decoration-none">
                  Oupidatat non
                </Link>
                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                  <li>M/L/X/XL</li>
                  <li className="pt-2">
                    <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                  </li>
                </ul>
                <ul className="list-unstyled d-flex justify-content-center mb-1">
                  <li>
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-muted fa fa-star" />
                    <i className="text-muted fa fa-star" />
                  </li>
                </ul>
                <p className="text-center mb-0">$250.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
              <div className="card rounded-0">
                <img
                  className="card-img rounded-0 img-fluid"
                  src="assets/img/shop_09.jpg"
                />
                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="btn btn-success text-white"
                        href="/shop-single"
                      >
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-success text-white mt-2"
                        href="/shop-single"
                      >
                        <i className="far fa-eye" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-success text-white mt-2"
                        href="/shop-single"
                      >
                        <i className="fas fa-cart-plus" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                <Link href="/shop-single" className="h3 text-decoration-none">
                  Oupidatat non
                </Link>
                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                  <li>M/L/X/XL</li>
                  <li className="pt-2">
                    <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                  </li>
                </ul>
                <ul className="list-unstyled d-flex justify-content-center mb-1">
                  <li>
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-muted fa fa-star" />
                    <i className="text-muted fa fa-star" />
                  </li>
                </ul>
                <p className="text-center mb-0">$250.00</p>
              </div>
            </div>
          </div>
        </div>
        <div div="row">
          <ul className="pagination pagination-lg justify-content-end">
            <li className="page-item disabled">
              <Link
                className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0"
                href="#"
                tabIndex={-1}
              >
                1
              </Link>
            </li>
            <li className="page-item">
              <Link
                className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark"
                href="#"
              >
                2
              </Link>
            </li>
            <li className="page-item">
              <Link
                className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark"
                href="#"
              >
                3
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* End Content */}
  <Brands/>
</>

  )
}

export default shop