import ollama from 'ollama';

/**
 * Use the `ollama` API to get a response from the Llama language model.
 * Send a message with the input "What is the capital of France" and log the response.
 */
const response = await ollama.chat({
  model: "llama2",  // Use the "llama2" model for generation
  messages: [
    { role: "user", content: "Why is the sky blue?" },  // The user's input
  ],
});
console.log(response['message']['content']);  // Log the Llama's response


