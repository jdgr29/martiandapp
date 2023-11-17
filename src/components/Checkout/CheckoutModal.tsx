import { Modal, Spin } from 'antd';
import React, { useEffect, useState } from 'react'
import { closeCheckout, fetchTicketById, selectCheckoutError, selectCheckoutLoadingStatus, selectCheckoutOpen, selectTicket } from '../../modules/checkout/checkoutSlice';
import { CheckoutError } from '../../modules/checkout/types';
import { useAppDispatch, useAppSelector, useAppThunkDispatch } from '../../modules/core/redux/hooks';
import stripe from '../../modules/core/singletons/stripe';

const CheckoutModal = ({
    quantity,
    ticketId
} : {
    quantity: number,
    ticketId: number
}) => {

  const ticket = useAppSelector((state) => selectTicket(state.checkout));
  const checkoutOpen = useAppSelector((state) => selectCheckoutOpen(state.checkout));
  const checkoutLoading = useAppSelector((state) => selectCheckoutLoadingStatus(state.checkout));
  const checkoutError = useAppSelector((state) => selectCheckoutError(state.checkout));

  const dispatch = useAppDispatch();
  const dispatchThunk = useAppThunkDispatch();

  useEffect(() => {
    console.log('call 1');
    if(!ticket) {
        console.log('call 2');
        dispatchThunk(fetchTicketById({ticketId}));
    }
  }, [ticket]);

  const purchase = async () => {
    // Create a Checkout Session.
    const response = await fetch('/api/payment/checkout-sessions', {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify({ quantity, ticketId }),
      })
    
    if(response.status != 200) throw Error('Unable to create sessions')

    const sessionDetails = await response.json();

    // Redirect to Checkout.
    const { error } = await (stripe)!.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: sessionDetails.id,
    })
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message)
  }

  return (
    <Modal
        title="Checkout"
        open={checkoutOpen}
        onOk={() => purchase()}
        okText={'purchase'}
        onCancel={() => dispatch(closeCheckout())}
        okButtonProps={{ disabled: (checkoutLoading || checkoutError != CheckoutError.NONE),
                         style: {display: 'none'}}}
    >
        {checkoutLoading ? <Spin size='large'/> :
            checkoutError == CheckoutError.NONE && 
            <div>
                <h1>todo - show final ticket purchase details here</h1>
            </div>
         }
        {checkoutError &&  <p>Unable to Checkout.</p>}
    </Modal>
  )
}

export default CheckoutModal