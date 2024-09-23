import express, { Application, Response, Request } from "express";
import "dotenv/config";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c4ea4a3e3bf973d0995753647d0cc91090c91d9b
import cors from "cors";
import helmet from "helmet";
import ExpressFileUpoad from "express-fileupload";
import { createServer, Server as HttpServer } from "http";
<<<<<<< HEAD
=======
import path from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";
import { sendEmail } from "./config/mail.js";

const app: Application = express();
>>>>>>> parent of 1a276c3 (queue setup using redis via docker && email service integrated to queue)
=======
>>>>>>> c4ea4a3e3bf973d0995753647d0cc91090c91d9b
const PORT = process.env.PORT || 7000;
import * as path from "path";
import { fileURLToPath } from "url";
import { Server } from "socket.io";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app: Application = express();
const server: HttpServer = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
  },
});

export { io };

setupSocket(io);

// *middleware
app.use(cors());
app.use(helmet());
app.use(
  ExpressFileUpoad({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// * Set View engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c4ea4a3e3bf973d0995753647d0cc91090c91d9b
// * Set Queue
import "./jobs/index.js";

app.get("/", async (req: Request, res: Response) => {
  const hoursDiff = checkDateHourDifference("2024-07-15T07:36:28.019Z");

  return res.json({ message: hoursDiff });
<<<<<<< HEAD
=======
app.get("/", async (req: Request, res: Response) => {
  const html = await ejs.renderFile(__dirname + `/views/emails/welcome.ejs`, {
    name: "Vivek Singh",
  });
  await sendEmail("xofatam201@asaud.com", "test mail", html);
  return res.json({ message: "Email sent successfully." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
>>>>>>> parent of 1a276c3 (queue setup using redis via docker && email service integrated to queue)
=======
>>>>>>> c4ea4a3e3bf973d0995753647d0cc91090c91d9b
});

// *Routes
import routes from "./routing/index.js";
import { checkDateHourDifference } from "./helper.js";
import { setupSocket } from "./socket.js";
app.use("/", routes);

server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
