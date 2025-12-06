// this is a netlify function that gets a random quote from an api
// it runs on a server and sends back data to our website

// these headers let our website talk to this function
// without them the browser would block the request
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET",
};

// this is the main function that runs when someone calls this endpoint
// netlify looks for a function called handler so we have to name it that
const handler = async function () {
  try {
    // we use fetch to call the zenquotes api
    // this api gives us random quotes
    const response = await fetch("https://zenquotes.io/api/random");

    // check if the api call worked
    if (!response.ok) {
      // if something went wrong we throw an error
      throw new Error("could not get quote from api");
    }

    // turn the response into json so we can read it
    const data = await response.json();

    // zenquotes returns an array so we get the first item
    // q is the quote text and a is the author
    const quote = data[0];

    // send the quote back to our website
    return {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify({
        content: quote.q,
        author: quote.a,
      }),
    };
  } catch (error) {
    // if anything goes wrong we send back an error message
    // 500 means something went wrong on the server
    return {
      statusCode: 500,
      headers: headers,
      body: JSON.stringify({
        content: "could not load a quote right now",
        author: "unknown",
      }),
    };
  }
};

// this line makes our function available to netlify
module.exports = { handler };
