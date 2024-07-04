import CheckoutCDN from "./CheckoutCDN";
import Header from "./Header";
import Footer from "./Footer";


export default function Checkout() {
    return (
        <div>
            <CheckoutCDN />
            <form>
                <div role="main" className="form-all">
                    <ul className="form-section page-section">
                        <li className="form-input-wide">
                            <div className="form-header-group header-large">
                                <div className="header-text httal htvam" style={{textAlign: "center"}}>
                                    <h1 className="form-header">THANH TOÁN</h1>
                                    <div className="form-subHeader">Bạn muốn mua GAME này ?</div>
                                </div>
                            </div>
                        </li>
                        <li className="form-line">
                            <label className="form-label form-label-left" aria-hidden="false">
                                Tên của bạn
                            </label>
                            <div className="form-input">
                                <div data-wrapper-react="true">
            <span className="form-sub-label-container" style={{verticalAlign: "top"}}
            ><input type="text" className="form-textbox" size="10"/><label
                className="form-sub-label"
                style={{minHeight: "13px"}}
            >Họ</label
            ></span
            ><span className="form-sub-label-container" style={{verticalAlign: "top"}}
                                ><input type="text" className="form-textbox" size="15"/><label
                                    className="form-sub-label"
                                    style={{minHeight: "13px"}}
                                >Tên</label
                                ></span
                                >
                                </div>
                            </div>
                        </li>
                        <li className="form-line">
                            <label className="form-label form-label-left" aria-hidden="false">
                                E-mail
                            </label>
                            <div className="form-input" data-layout="half">
          <span className="form-sub-label-container" style={{verticalAlign: "top"}}
          ><input
              type="email"
              className="form-textbox validate[Email]"
              style={{width: "310px"}}
              size="310"
              placeholder="ex: myname@example.com"
          /><label className="form-sub-label" style={{minHeight: "13px"}}
          >example@example.com</label
          ></span>
                            </div>
                        </li>
                        <li className="form-line">
                            <label className="form-label form-label-left" aria-hidden="false">
                                Số điện thoại
                            </label>
                            <div className="form-input" data-layout="half">
          <span className="form-sub-label-container" style={{verticalAlign: "top"}}
          ><input
              type="number"
              className="form-textbox validate[Email]"
              style={{width: "310px"}}
              size="310"
              placeholder="ex: 0987541246"
          /><label className="form-sub-label" style={{minHeight: "13px"}}
          ></label
          ></span></div>
                        </li>
                        <label className="form-label form-label-top"> Game của bạn </label>
                        <div className="form-input-wide" data-layout="full">
                            <div data-wrapper-react="true">
                                <div data-wrapper-react="true" className="product-container-wrapper">
                                    <div className="filter-container"></div>
                                    <input type="hidden" name="simple_fpc"/>
                                    <input type="hidden" name="payment_transaction_uuid"/>
                                    <input type="hidden" name="payment_version"/>
                                    <input type="hidden" name="payment_total_checksum"/>
                                    <input type="hidden" name="payment_discount_value"/>
                                    <div
                                        id="image-overlay"
                                        className="overlay-content"
                                        style={{display: "none"}}
                                    >
                                        <img id="current-image"/><span className="lb-prev-button"
                                    >prev</span
                                    >
                                        <span className="lb-next-button">next</span
                                        ><span className="lb-close-button">( X )</span>
                                        <span className="image-overlay-product-container">
                  <ul
                      className="form-overlay-item"
                      pid="1004"
                      hasicon="false"
                      hasimages="true"
                      iconvalue=""
                  >
                    <li className="image-overlay-image">
                      <img
                          loading="lazy"
                          src="https://www.jotform.com/uploads/ugurg/form_files/cap.png"
                      />
                    </li>
                  </ul>
                  <ul
                      className="form-overlay-item"
                      pid="1005"
                      hasicon="false"
                      hasimages="true"
                      iconvalue=""
                  >
                    <li className="image-overlay-image">
                      <img
                          loading="lazy"
                          src="https://www.jotform.com/uploads/ugurg/form_files/linen-shoes.png"
                      />
                    </li>
                  </ul>
                  <ul
                      className="form-overlay-item"
                      pid="1006"
                      hasicon="false"
                      hasimages="true"
                      iconvalue=""
                  >
                    <li className="image-overlay-image">
                      <img
                          loading="lazy"
                          src="https://www.jotform.com/uploads/ugurg/form_files/hoodie.png"
                      />
                    </li>
                  </ul>
                </span>
                                    </div>
                                    <div data-wrapper-react="true">
                <span
                    className="form-product-item hover-product-item show_image show_desc new_ui"
                    categories="non-categorized"
                    pid="1004"
                    aria-labelledby="label_3"
                >
                  <div
                      data-wrapper-react="true"
                      className="form-product-item-detail new_ui"
                  >
                    <div className="p_col">
                      <div className="p_checkbox">
                        <input
                            type="checkbox"
                            className="form-checkbox form-product-input"
                            id="input_3_1004"
                            name="q3_myProducts[][id]"
                            data-inputname="q3_myProducts[][id]"
                            value="1004"
                            readonly=""
                            aria-label="Select Product: Cap"
                            data-is-default-required="false"
                            data-is-default-selected="false"
                        />
                        <div className="checked"></div>
                        <div className="select_border"></div>
                      </div>
                    </div>
                    <div className="p_image">
                      <div className="image_area form-product-image-with-options">
                        <div
                            style="position: absolute; width: 100%; height: 100%"
                            style={{position: "absolute", width: "100%", height: "100%"}}
                        >
                          <img
                              loading="lazy"
                              role="img"
                              aria-label="Cap"
                              alt="Cap Product Image"

                              style={{width: "100%", height: "100%", objectFit: "cover"}}
                              src="https://www.jotform.com/uploads/ugurg/form_files/cap.png"
                          />
                        </div>
                        <div className="image_zoom"></div>
                      </div>
                    </div>
                    <div for="input_3_1004" className="form-product-container">
                      <span data-wrapper-react="true">
                        <div className="title_description">
                          <span
                              className="form-product-name"
                              id="product-name-input_3_1004"
                          >Cap</span
                          ><span
                            className="form-product-description"
                            id="product-name-description-input_3_1004"
                        >This product is made from at least 50% recycled
                            polyester fiber.</span
                        >
                        </div>
                        <span className="form-product-details"
                        ><b
                        ><span data-wrapper-react="true"
                        >$<span id="input_3_1004_price">5.00</span></span
                        ></b
                        ></span
                        >
                      </span>
                    </div>
                    <div className="focus_action_button_container">
                      <a
                          className="btn-inline-product-delete"
                          tabindex="0"
                          role="button"
                          aria-label="Delete Product"
                      >
                      </a
                      ><a
                        className="btn-inline-product-settings"
                        tabindex="0"
                        role="button"
                        aria-label="Product Settings"
                    >
                      </a>
                    </div>
                  </div>
                </span>
                                        <div className="p_item_separator"></div>
                                        <span
                                            className="form-product-item hover-product-item show_image show_desc new_ui"
                                            categories="non-categorized"
                                            pid="1005"
                                            aria-labelledby="label_3"
                                        >
                  <div
                      data-wrapper-react="true"
                      className="form-product-item-detail new_ui"
                  >
                    <div className="p_col">
                      <div className="p_checkbox">
                        <input
                            type="checkbox"
                            className="form-checkbox form-product-input"
                            id="input_3_1005"
                            name="q3_myProducts[][id]"
                            data-inputname="q3_myProducts[][id]"
                            value="1005"

                            aria-label="Select Product: Linen Shoes"
                            data-is-default-required="false"
                            data-is-default-selected="false"
                        />
                        <div className="checked"></div>
                        <div className="select_border"></div>
                      </div>
                    </div>
                    <div className="p_image">
                      <div className="image_area form-product-image-with-options">
                        <div
                            style={{width: "100%", height: "100%", position: "absolute"}}
                        >
                          <img
                              loading="lazy"
                              role="img"
                              aria-label="Linen Shoes"
                              alt="Linen Shoes Product Image"
                              style={{width: "100%", height: "100%", objectFit: "cover"}}
                              src="https://www.jotform.com/uploads/ugurg/form_files/linen-shoes.png"
                          />
                        </div>
                        <div className="image_zoom"></div>
                      </div>
                    </div>
                    <div className="form-product-container">
                      <span data-wrapper-react="true">
                        <div className="title_description">
                          <span
                              className="form-product-name"
                              id="product-name-input_3_1005"
                          >Linen Shoes</span
                          ><span
                            className="form-product-description"
                            id="product-name-description-input_3_1005"
                        >You will wear it again and again, this shoe is
                            remarkable and loyal just like you.</span
                        >
                        </div>
                        <span className="form-product-details"
                        ><b
                        ><span data-wrapper-react="true"
                        >$<span id="input_3_1005_price">7.00</span></span
                        ></b
                        ></span
                        >
                      </span>
                    </div>
                    <div className="focus_action_button_container">
                      <a
                          className="btn-inline-product-delete"
                          tabindex="0"
                          role="button"
                          aria-label="Delete Product"
                      >
                      </a
                      ><a
                        className="btn-inline-product-settings"
                        tabindex="0"
                        role="button"
                        aria-label="Product Settings"
                    >
                      </a>
                    </div>
                  </div>
                </span>
                                        <div className="p_item_separator"></div>
                                        <span
                                            className="form-product-item hover-product-item show_image show_desc new_ui"
                                            categories="non-categorized"
                                            pid="1006"
                                            aria-labelledby="label_3"
                                        >
                  <div
                      data-wrapper-react="true"
                      className="form-product-item-detail new_ui"
                  >
                    <div className="p_col">
                      <div className="p_checkbox">
                        <input
                            type="checkbox"
                            className="form-checkbox form-product-input"
                        />
                        <div className="checked"></div>
                        <div className="select_border"></div>
                      </div>
                    </div>
                    <div className="p_image">
                      <div className="image_area form-product-image-with-options">
                        <div
                            style={{width: "100%", height: "100%", position: "absolute"}}
                        >
                          <img
                              loading="lazy"
                              role="img"
                              aria-label="Hoodie"
                              alt="Hoodie Product Image"
                              style={{width: "100%", height: "100%", objectFit: "cover"}}
                              src="https://www.jotform.com/uploads/ugurg/form_files/hoodie.png"
                          />
                        </div>
                        <div className="image_zoom"></div>
                      </div>
                    </div>
                    <div for="input_3_1006" className="form-product-container">
                      <span data-wrapper-react="true">
                        <div className="title_description">
                          <span
                              className="form-product-name"
                              id="product-name-input_3_1006"
                          >Hoodie</span
                          ><span
                            className="form-product-description"
                            id="product-name-description-input_3_1006"
                        >Durably stitched surfaces, clean finishes and the
                            perfect amount of shine to make you dazzle.</span
                        >
                        </div>
                        <span className="form-product-details"
                        ><b
                        ><span data-wrapper-react="true"
                        >$<span id="input_3_1006_price">9.00</span></span
                        ></b
                        ></span
                        >
                      </span>
                    </div>
                    <div className="focus_action_button_container">
                      <a
                          className="btn-inline-product-delete"
                          tabindex="0"
                          role="button"
                          aria-label="Delete Product"
                      >
                      </a
                      ><a
                        className="btn-inline-product-settings"
                        tabindex="0"
                        role="button"
                        aria-label="Product Settings"
                    >
                      </a>
                    </div>
                  </div>
                </span>
                                        <div className="payment_footer new_ui">
                                            <div className="total_area">
                                                <div className="form-payment-total">
                                                    <div id="total-text">Total</div>
                                                    <div className="form-payment-price">
                        <span data-wrapper-react="true"
                        >$<span id="payment_total">0.00</span></span
                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <li className="form-line">
                            <label className="form-label form-label-top"> Payment Methods </label>
                            <div id="cid_8" className="form-input-wide" data-layout="full">
                                <div className="payment-methods-area">
                                    <div className="paypalcomplete-payment-wrapper">
                                        <div id="paypal-commerce-platform-container">
                                            <div className="paypal-toggle-buttons">
                                                <div className="paypal-toggle">
                                                    <div id="paypal-card-fields">
                                                        <div
                                                            className="payment-method-container"
                                                            data-id="paypal-card-fields"
                                                        >
                                                            <input
                                                                type="radio"
                                                                className="form-radio"
                                                                name="paypal-payment-method"
                                                                data-id="paypal-card-fields"
                                                                id="paypal-card-fields-input"
                                                                aria-describedby="label_8"
                                                            /><label for="paypal-card-fields-input"
                                                        ><span className="CC_ico"></span>Debit or Credit
                                                            Card</label
                                                        >
                                                        </div>
                                                    </div>
                                                    <div id="paypal-smart-buttons">
                                                        <div
                                                            className="payment-method-container"
                                                            data-id="paypal-smart-buttons"
                                                        >
                                                            <input
                                                                type="radio"
                                                                className="form-radio"
                                                                name="paypal-payment-method"
                                                                data-id="paypal-smart-buttons"
                                                                id="paypal-smart-buttons-input"
                                                                aria-label="Paypal"
                                                                aria-describedby="label_8"
                                                            /><label
                                                            for="paypal-smart-buttons-input"
                                                            aria-hidden="true"
                                                        ></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="paypal-toggle-content" render-paypal-type="">
                                                <div className="content-area">
                                                    <div id="paypal-spb-area">
                                                        <p>
                                                            Please click one of the PayPal options to complete
                                                            payment and <b>submit</b> the form.
                                                        </p>
                                                        <div
                                                            id="paypal-button-container"
                                                            style="pointer-events: all"
                                                            style={{pointerEvents: "all"}}
                                                        ></div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="paypal-paylater-messages"
                                                    style={{display: "block", paddingTop: "12px"}}
                                                >
                                                    <div className="message-area"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input
                                        type="hidden"
                                        id="input_8_payment_method"
                                        name="q8_paymentMethods[payment_method]"
                                        className=""
                                        data-defaultvalue=""
                                        data-component="payment_method"
                                        aria-labelledby=""
                                        value=""
                                    />
                                </div>
                            </div>
                        </li>
                        <li className="form-line" data-type="control_button" id="id_7">
                            <div id="cid_7" className="form-input-wide" data-layout="full">
                                <div
                                    data-align="auto"
                                    className="form-buttons-wrapper form-buttons-auto jsTest-button-wrapperField"
                                >
                                    <button
                                        id="input_7"
                                        type="submit"
                                        className="form-submit-button submit-button jf-form-buttons jsTest-submitField"
                                        data-component="button"
                                        data-content=""
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
            )
            }
