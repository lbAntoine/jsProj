"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootReducer = void 0;

var _redux = require("redux");

var _teams = require("./teams");

var rootReducer = (0, _redux.combineReducers)({
  teams: _teams.teams
});
exports.rootReducer = rootReducer;