/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

import Amadeus from "amadeus-ts";
import {defineSecret} from "firebase-functions/params";

const amadeusApiKey = defineSecret("AMADEUS_API_KEY");
const amadeusApiSecret = defineSecret("AMADEUS_API_SECRET");

export const getFlights = onRequest(
  {cors: true, secrets: [amadeusApiKey, amadeusApiSecret]},
  (request, response) => {
    const amadeus = new Amadeus({
      clientId: amadeusApiKey.value(),
      clientSecret: amadeusApiSecret.value(),
    });

    amadeus.shopping.flightDestinations
      .get({
        origin: "MAD",
      })
      .then((apiResponse) => {
        response.json(apiResponse.result);
      })
      .catch((error) => {
        response.send(error);
      });
  }
);
