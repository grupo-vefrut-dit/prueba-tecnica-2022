"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = __importDefault(require("./app"));
// INICIALIZAR EL SEVIDOR
const server = new app_1.default((0, express_1.default)());
server.listen();
server.connection();
server.middleware();
server.routes();
