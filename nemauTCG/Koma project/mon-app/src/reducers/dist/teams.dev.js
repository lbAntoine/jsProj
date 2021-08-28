"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.teams = void 0;

var _team = _interopRequireDefault(require("../models/team"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var teams = function teams() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [new _team["default"]("Wildcats", null), new _team["default"]("Yankees", null), new _team["default"]("Super", null), new _team["default"]("Stealers", null)];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return state;
};

exports.teams = teams;