// CJS
//var module = require('file path');
// const simple = require('./modulesecond.js');

// const { complex, default: complex2 } = require("./modulesecond.mjs");

// simple();

//////////////////////////////////////////////////////////
// ESM
//import defaultStuff, { namedStuff } from 'file path';

// import { complex } from "./modulesecond.mjs";
import * as a2 from './modulesecond.mjs';
//first add " "type": "module", " in package.json then it will run

// complex();
a2.complex();
a2.default();
