import express from "express";
import { earlyAccessregister } from "../controllers/user.controller.js";
import { earlyEmailConfirmation } from "../utils/emails/email.js";

const router = express.Router();

router.route("/earlyaccess").post(earlyEmailConfirmation, earlyAccessregister);

export default router;
