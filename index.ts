import { multiInject, Container, injectable } from 'inversify';
import { provide, buildProviderModule } from 'inversify-binding-decorators';
import 'reflect-metadata';

const TYPES = {
    IModel: Symbol('IModel')
};

interface IModel{
    doSomething();
}

@provide(TYPES.IModel)
export class Dog implements IModel {
    public doSomething(){}
}

@provide(TYPES.IModel)
export class Cat implements IModel {
    public doSomething(){}
}

const container = new Container();
container.load(buildProviderModule());

@injectable()
export class PetShop{    
    constructor(@multiInject(TYPES.IModel) private models: IModel[]){        
    }

    public get Models(): IModel[]{
        return this.models;
    }
}

const shop = container.resolve(PetShop);
var models = shop.Models;

