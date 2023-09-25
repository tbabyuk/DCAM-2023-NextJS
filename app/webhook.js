
// import { NextResponse } from "next/server"


// // This is your test secret API key.
// const stripe = require('stripe')('sk_test_51NrvqIBzVRorr5QYX7X3ILvIwrMespiDXDK14KgthaosgHtnh9guKBnzU9v8GWmWTvDAxoT0vWMXWB2tHbWYtWkc00aqvuzFNh');
// // Replace this endpoint secret with your endpoint's unique secret
// // If you are testing with the CLI, find the secret by running 'stripe listen'
// // If you are using an endpoint defined with the API or dashboard, look in your webhook settings
// // at https://dashboard.stripe.com/webhooks
// const endpointSecret = 'whsec_f1e127f79d77bf99364aeeaf6f7e28969b54475e27784d63f2e6380a72ae593c';
// const express = require('express');
// const app = express();

// app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
//   let event = request.body;
//   // Only verify the event if you have an endpoint secret defined.
//   // Otherwise use the basic event deserialized with JSON.parse
//   if (endpointSecret) {
//     // Get the signature sent by Stripe
//     const signature = request.headers['stripe-signature'];
//     try {
//       event = stripe.webhooks.constructEvent(
//         request.body,
//         signature,
//         endpointSecret
//       );
//     } catch (err) {
//       console.log(`⚠️  Webhook signature verification failed.`, err.message);
//       return response.sendStatus(400);
//     }
//   }

//   // Handle the event
//   switch (event.type) {
//     case 'payment_intent.succeeded':
//       const paymentIntent = event.data.object;
//       console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
//       // Then define and call a method to handle the successful payment intent.
//       // handlePaymentIntentSucceeded(paymentIntent);
//       break;
//     case 'payment_method.attached':
//       const paymentMethod = event.data.object;
//       // Then define and call a method to handle the successful attachment of a PaymentMethod.
//       // handlePaymentMethodAttached(paymentMethod);
//       break;
//     default:
//       // Unexpected event type
//       console.log(`Unhandled event type ${event.type}.`);
//   }

//   // Return a 200 response to acknowledge receipt of the event
//   response.send();
// });

// app.listen(4242, () => console.log('Running on port 4242'));







// This is your test secret API key.
const stripe = require('stripe')('sk_test_51NrvqIBzVRorr5QYX7X3ILvIwrMespiDXDK14KgthaosgHtnh9guKBnzU9v8GWmWTvDAxoT0vWMXWB2tHbWYtWkc00aqvuzFNh');
// Replace this endpoint secret with your endpoint's unique secret
// If you are testing with the CLI, find the secret by running 'stripe listen'
// If you are using an endpoint defined with the API or dashboard, look in your webhook settings
// at https://dashboard.stripe.com/webhooks
const endpointSecret = 'whsec_f1e127f79d77bf99364aeeaf6f7e28969b54475e27784d63f2e6380a72ae593c';
const express = require('express');
const app = express();


// ==========================================


// New route to accept GET requests and return JSON data
app.get('http://localhost:4242/webhook', (request, response) => {
  // Create an example JSON object
  const data = {
    message: 'This is JSON data from your server.',
    timestamp: new Date().toISOString(),
  };

  // Send the JSON response
  response.json(data);
});


// ==========================================

app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  let event = request.body;
  // Only verify the event if you have an endpoint secret defined.
  // Otherwise use the basic event deserialized with JSON.parse
  if (endpointSecret) {
    // Get the signature sent by Stripe
    const signature = request.headers['stripe-signature'];
    try {
      event = stripe.webhooks.constructEvent(
        request.body,
        signature,
        endpointSecret
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      return response.sendStatus(400);
    }
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
      // Then define and call a method to handle the successful payment intent.
      // handlePaymentIntentSucceeded(paymentIntent);
      break;
    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      // Then define and call a method to handle the successful attachment of a PaymentMethod.
      // handlePaymentMethodAttached(paymentMethod);
      break;
    default:
      // Unexpected event type
      console.log(`Unhandled event type ${event.type}.`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});

app.listen(4242, () => console.log('Running on port 4242'));