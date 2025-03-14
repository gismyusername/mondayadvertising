<template>
  <div class="pb-100">
    <div class="container">
      <div class="section-title">
        <span class="top-title">GET IN TOUCH</span>
        <h2>
          Your Gateway to Excellence: Contact Us and Unlock a World of
          Possibilities
        </h2>
      </div>

      <div class="contact-us-bg-wrap">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <div class="contact-us-info">
              <div class="contact-us-single-item">
                <h3>Office Address</h3>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <div class="icon">
                      <img
                        src="../../assets/images/loaction.png"
                        alt="loaction"
                      />
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <p>2750 Quadra Street Victoria Road, New York, USA</p>
                  </div>
                </div>
              </div>
              <div class="contact-us-single-item">
                <h3>Phone Number</h3>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <div class="icon">
                      <img src="../../assets/images/call.png" alt="call" />
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <a href="tel:(+123)456-7898" class="d-block">
                      (+123) 456-7898
                    </a>
                    <a href="tel:(+123)-456-7899" class="d-block">
                      (+123) 456-7899
                    </a>
                  </div>
                </div>
              </div>
              <div class="contact-us-single-item">
                <h3>Email Us</h3>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <div class="icon">
                      <img src="../../assets/images/email-1.png" alt="call" />
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <a href="mailto:support@adli.com" class="d-block">
                      support@adli.com
                    </a>
                    <a href="tel:info@adli.com" class="d-block">
                      info@adli.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-7">
            <div class="contact-us-form">
              <div class="form-group mb-3">
                <label class="label">Your Name</label>
                <input
                  type="text"
                  class="form-control rounded-pill"
                  placeholder="Enter your name"
                />
              </div>
              <div class="form-group mb-3">
                <label class="label">Your Email</label>
                <input
                  type="text"
                  class="form-control rounded-pill"
                  placeholder="Enter your email address"
                />
              </div>
              <div class="form-group mb-3">
                <label class="label">Your Phone</label>
                <input
                  type="text"
                  class="form-control rounded-pill"
                  placeholder="Enter your phone number"
                />
              </div>
              <div class="form-group mb-3">
                <label class="label">Your Subject</label>
                <input
                  type="text"
                  class="form-control rounded-pill"
                  placeholder="Enter your subject"
                />
              </div>
              <div class="form-group mb-3">
                <label class="label">Your Message</label>
                <textarea
                  class="form-control"
                  placeholder="Enter your message"
                  cols="30"
                  rows="4"
                ></textarea>
              </div>
              <div class="form-group">
                <button type="submit" class="default-btn border-0">
                  SUBMIT NOW
                  <img
                    src="../../assets/images/icon-right-white.png"
                    alt="icon-right-white"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>

<style lang="scss" scoped>
.contact-us-bg-wrap {
  border-radius: 20px;
  border: 1px solid var(--headingColor);
  background: var(--whiteColor);
}
.contact-us-info {
  background-color: #161519;
  padding: 90px 70px;
  border-radius: 20px;
  margin-right: -30px;
}
.contact-us-single-item {
  border-radius: 20px;
  border: 1px solid #585858;
  padding: 30px;
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
  h3 {
    font-size: 22px;
    color: var(--whiteColor);
    margin-bottom: 25px;
  }
  .icon {
    width: 58px;
    height: 58px;
    line-height: 58px;
    background-color: #4c4c4c;
    text-align: center;
    border-radius: 50px;
  }
  p {
    color: var(--whiteColor);
  }
  a {
    color: var(--whiteColor);
    text-decoration: none;
    margin-bottom: 5px;

    &:last-child {
      margin-bottom: 0;
    }
    &:hover {
      color: var(--mainColor);
    }
  }
}
.contact-us-form {
  padding: 60px 90px;
  .form-group {
    label {
      font-size: 16px;
      font-weight: 600;
      font-family: var(--headingFontFamily);
      color: var(--headingColor);
      margin-bottom: 8px;
    }
    .form-control {
      height: 52px;
    }
    textarea {
      &.form-control {
        height: auto;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .contact-us-info {
    padding: 20px;
    margin-right: 0;
  }
  .contact-us-single-item {
    padding: 20px;
    h3 {
      font-size: 18px;
      margin-bottom: 15px;
    }
    p {
      font-size: 14px;
    }
    a {
      font-size: 14px;
    }
  }
  .contact-us-form {
    padding: 20px;
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .contact-us-info {
    padding: 50px;
    margin-right: 0;
  }
  .contact-us-single-item {
    h3 {
      font-size: 20px;
      margin-bottom: 15px;
    }
  }
  .contact-us-form {
    padding: 50px;
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .contact-us-info {
    padding: 75px 30px;
    margin-right: 0;
  }
  .contact-us-single-item {
    h3 {
      font-size: 20px;
      margin-bottom: 15px;
    }
  }
  .contact-us-form {
    padding: 50px;
  }
}
</style>