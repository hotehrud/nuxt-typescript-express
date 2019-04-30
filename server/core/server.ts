import express from "express";

import todos from "./api/todos/index";

export default class NuxtServer {
  public static getInstance(): NuxtServer {
    if (this._instance) {
      return this._instance;
    } else {
      this._instance = new NuxtServer();
      return this._instance;
    }
  }
  private static _instance: NuxtServer;
  protected _app: any;

  // Server Configuration
  protected _host: string;
  protected _port: number | string;

  protected constructor() {
    this._app = express();
    this._host = process.env.HOST || "127.0.0.1";
    this._port = process.env.PORT || 8080;
  }

  public run(): void {
    this._app.set("port", this._port);

    this._app.use(express.static("static"));

    this._app.get("/", (req, res, next) => {
      res.send("API root");
    });

    // Import API Routes
    this._app.use("/api/todos", todos);

    // Listen the server
    this._app.listen(this._port, this._host);

    return;
  }
}
