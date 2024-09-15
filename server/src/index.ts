import express, { Application, Request, Response } from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";
import { sendEmail } from "./config/mail.js";

const app: Application = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

app.get("/", async (req: Request, res: Response) => {
  const html = await ejs.renderFile(__dirname + `/views/emails/welcome.ejs`, {
    name: "Vivek Singh",
  });
  await sendEmail("xofatam201@asaud.com", "test mail", html);
  return res.json({ message: "Email sent successfully." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
