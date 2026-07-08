const router = require("express").Router();

const {
  getEmails,
} = require("../services/gmailService");

router.get("/emails", async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: "Not authenticated",
      });
    }

    const emails = await getEmails(
      req.user.accessToken
    );

    res.json(emails);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch emails",
    });
  }
});

module.exports = router;