import {value} from './module';
import {Schema} from 'mongoose';
Promise.all([import('unified')]).then(([unified ]) => {

    console.log(unified);
    const parser_var = unified.unified();
    const schema = new Schema({});
    console.log(value);
})
