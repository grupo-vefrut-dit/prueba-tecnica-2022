import express from "express";
import Server from "./app";

// INICIALIZAR EL SEVIDOR

const server = new Server(express());

server.listen();
server.connection();
server.middleware();
server.routes();
