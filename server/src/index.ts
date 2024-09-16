import express, { Application, Request, Response } from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";
import { sendMail } from "./config/mail.js";

const app: Application = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

app.get("/", async (req: Request, res: Response) => {
  const html = await ejs.renderFile(__dirname + `/views/emails/welcome.ejs`, {
    // setup req.body.name while building frontend
    name: "Vivek Singh",
  });

  // setup req.body.x (as per needed)
  await emailQueue.add(emailQueueName, {
    to: "xofatam201@asaud.com",
    subject: "Test Mail",
    body: html,
  });
  return res.json({ msg: "email sent sucessfully" });
});

//queue imports
import "./jobs/index.js";
import { emailQueue, emailQueueName } from "./jobs/EmailQueue.js";

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
