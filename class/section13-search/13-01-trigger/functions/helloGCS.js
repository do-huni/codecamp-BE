/**
 * Triggered from a change to a Cloud Storage bucket.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */
exports.helloGCS = (event, context) => {
  consoel.log(`event: ${JSON.stringify(event)}\n context: ${JSON.stringify(context)}`);
  const gcsEvent = event;
  console.log(`Processing file: ${gcsEvent.name}`);
};
