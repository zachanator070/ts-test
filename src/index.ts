const unified = import("unified");
import mongoose, {Schema} from "mongoose";
import {value} from './module';
unified.then((module) => {
    const parser = module.unified();
});
const schema = new Schema({});
console.log(value);