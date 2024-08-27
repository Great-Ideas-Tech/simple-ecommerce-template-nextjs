import React from 'react'

function contact() {
  return (
    <>
  {/* Start Content Page */}
  <div className="container-fluid bg-light py-5">
    <div className="col-md-6 m-auto text-center">
      <h1 className="h1">Contact Us</h1>
      <p>
        Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet.
      </p>
    </div>
  </div>
  {/* end Content Page */}
{/*start google map */}
<div className="container-fluid p-0">
      <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.794008437608!2d144.9541010757369!3d-37.818293671974494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4cee0cec83%3A0xd019c5f69915a4a0!2sCollins%20St%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1724674930455!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
                className=' '
            ></iframe>
            </div>
{/*end google map */}
  {/* Start Contact */}
  <div className="container py-5">
    <div className="row py-5">
      <form className="col-md-9 m-auto" method="post" role="form">
        <div className="row">
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="inputname">Name</label>
            <input
              type="text"
              className="form-control mt-1"
              id="name"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="inputemail">Email</label>
            <input
              type="email"
              className="form-control mt-1"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputsubject">Subject</label>
          <input
            type="text"
            className="form-control mt-1"
            id="subject"
            name="subject"
            placeholder="Subject"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputmessage">Message</label>
          <textarea
            className="form-control mt-1"
            id="message"
            name="message"
            placeholder="Message"
            rows={8}
            defaultValue={""}
          />
        </div>
        <div className="row">
          <div className="col text-end mt-2">
            <button type="submit" className="btn btn-success btn-lg px-3">
              Let’s Talk
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  {/* End Contact */}
</>

  )
}

export default contact