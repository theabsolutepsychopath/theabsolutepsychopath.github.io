// Replace the obfuscated webhook URL with your own
const obfuscatedWebhookUrl = "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTEwMDA3MjY5OTk3MzM1MzU0Mi8ydTdjdjdUeU1UZjd4WEkzdzlOYVBlSDJReGtDLW0wX2RSWm0zMEIyLXNxMV82cDU0SDdWaXhPbGNTbzg1M1ZYSUpPdQ==";

// Decode the obfuscated webhook URL from base64
const webhookUrl = atob(obfuscatedWebhookUrl);

// Results for contact form success or not
window.onload = function loadingcontact() {
  document.getElementById("result").innerHTML = "";
}

// Function to send the webhook
function sendToDiscord() {
  const nameInput = document.getElementById("name").value;
  const emailInput = document.getElementById("email").value;
  const messageInput = document.getElementById("message").value;
  const newsletterInput = document.getElementById("newsletter").checked;

  // Construct the payload for the webhook
  const payload = {
    content: "${nameInput} (${emailInput}): ${messageInput} \n \n Add to email list: ${newsletterInput}",
    username: `Contact Form Submissions`,
    avatar_url: "https://cdn.discordapp.com/attachments/1100072590560743497/1100073426288382094/ezgif.com-gif-maker_1.gif",
  };

  // Send the webhook using the fetch API
  fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      console.log("Contact Information Sent Successfully!");
      document.getElementById("result").innerHTML = `Your contact information has been sent sucessfully!`;
    })
    .catch((error) => {
      console.error("Error sending contact info:", error);
      document.getElementById("result").innerHTML = `There was an issue proccessing your contact information. Please try again in a little bit.`;
    });
}
