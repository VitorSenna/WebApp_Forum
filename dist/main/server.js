"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const env_1 = __importDefault(require("./config/env"));
const port = process.env.PORT || 3333;
app_1.app.listen(port, () => {
    console.log(`Server on port: ${port} - host:${env_1.default.dbHost} - db:${env_1.default.dbName}`);
});
// app.get('/', (req: Request, res: Response)=> {
//     res.send('Server is running')
// })
// app.use(express.json())
// app.use(routerUser)
