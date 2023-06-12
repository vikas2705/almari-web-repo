import express from "express";
import {
  serverFaqs,
  serverIndexFile,
  serverPrivacyPolicy,
  serverTerms,
} from "../controllers/index.controller.js";

const router = express.Router();

router.route("/").get(serverIndexFile);
router.route("/privacy-policy").get(serverPrivacyPolicy);
router.route("/terms").get(serverTerms);
router.route("/faqs").get(serverFaqs);

export default router;
