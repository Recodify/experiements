"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const inversify_binding_decorators_1 = require("inversify-binding-decorators");
require("reflect-metadata");
const TYPES = {
    IModel: Symbol('IModel')
};
let Dog = class Dog {
    doSomething() { }
};
Dog = __decorate([
    inversify_binding_decorators_1.provide(TYPES.IModel)
], Dog);
exports.Dog = Dog;
let Cat = class Cat {
    doSomething() { }
};
Cat = __decorate([
    inversify_binding_decorators_1.provide(TYPES.IModel)
], Cat);
exports.Cat = Cat;
const container = new inversify_1.Container();
container.load(inversify_binding_decorators_1.buildProviderModule());
let PetShop = class PetShop {
    constructor(models) {
        this.models = models;
    }
    get Models() {
        return this.models;
    }
};
PetShop = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.multiInject(TYPES.IModel))
], PetShop);
exports.PetShop = PetShop;
const shop = container.resolve(PetShop);
var models = shop.Models;
//# sourceMappingURL=index.js.map