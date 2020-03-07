"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var cors_1 = __importDefault(require("cors"));
// https://www.youtube.com/watch?v=0mYq5LrQN1s&list=PL85ITvJ7FLoiNndfuEs2So-MFLSMvBmmD&index=8&t=877s
// 48:37
var app = express_1.default();
app.use(cors_1.default());
app.use(routes_1.default);
app.get('/', function (req, res) {
    return res.send('Hello World');
});
app.listen(3333);
