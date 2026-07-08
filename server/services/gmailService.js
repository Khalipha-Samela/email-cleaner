const { google } = require("googleapis");

/**
 * Creates an authenticated Gmail client.
 */
function createGmailClient(accessToken) {
  const oauth2Client = new google.auth.OAuth2();

  oauth2Client.setCredentials({
    access_token: accessToken,
  });

  return google.gmail({
    version: "v1",
    auth: oauth2Client,
  });
}

/**
 * Get recent inbox emails.
 */
async function getEmails(accessToken, maxResults = 20) {
  const gmail = createGmailClient(accessToken);

  const { data } = await gmail.users.messages.list({
    userId: "me",
    maxResults,
  });

  if (!data.messages) {
    return [];
  }

  const emails = await Promise.all(
    data.messages.map(async (message) => {
      const { data: email } = await gmail.users.messages.get({
        userId: "me",
        id: message.id,
      });

      const headers = email.payload.headers;

      const getHeader = (name) =>
        headers.find((header) => header.name === name)?.value || "";

      return {
        id: message.id,
        threadId: message.threadId,

        from: getHeader("From"),
        to: getHeader("To"),
        subject: getHeader("Subject"),
        date: getHeader("Date"),

        snippet: email.snippet,

        labelIds: email.labelIds || [],
      };
    })
  );

  return emails;
}

module.exports = {
  getEmails,
};