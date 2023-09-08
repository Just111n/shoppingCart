"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GenerateIdService = void 0;
var common_1 = require("@nestjs/common");
var uuid_1 = require("uuid");
var GenerateIdService = /** @class */ (function () {
    function GenerateIdService() {
    }
    GenerateIdService.generateRandomId = function (checkExistedArray) {
        var newId = (0, uuid_1.V4)();
        if (!this.isIdAlreadyExisted(newId, checkExistedArray)) {
            return newId;
        }
        while (this.isIdAlreadyExisted(newId, checkExistedArray)) {
            newId = (0, uuid_1.V4)();
        }
        return newId;
    };
    GenerateIdService.isIdAlreadyExisted = function (generatedId, checkExistedArray) {
        return (checkExistedArray.findIndex(function (item) {
            return item === generatedId ||
                Object.values(item).some(function (value) { return value === generatedId; });
        }) > -1);
    };
    GenerateIdService = __decorate([
        (0, common_1.Global)(),
        (0, common_1.Injectable)()
    ], GenerateIdService);
    return GenerateIdService;
}());
exports.GenerateIdService = GenerateIdService;
