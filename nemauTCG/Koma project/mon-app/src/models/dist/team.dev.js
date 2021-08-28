"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uuid = require("uuid");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Team = function Team(name, img_url) {
  _classCallCheck(this, Team);

  this.id = (0, _uuid.v4)();
  this.name = name;
  this.img_url = img_url;
};

var _default = Team;
exports["default"] = _default;