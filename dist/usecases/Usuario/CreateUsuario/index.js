"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsuarioUseCase = exports.createUsuarioController = void 0;
const CreateUsuarioController_1 = require("./CreateUsuarioController");
const CreateUsuarioUseCase_1 = require("./CreateUsuarioUseCase");
const createUsuarioUseCase = new CreateUsuarioUseCase_1.CreateUsuarioUseCase();
exports.createUsuarioUseCase = createUsuarioUseCase;
const createUsuarioController = new CreateUsuarioController_1.CreateUsuarioController(createUsuarioUseCase);
exports.createUsuarioController = createUsuarioController;
