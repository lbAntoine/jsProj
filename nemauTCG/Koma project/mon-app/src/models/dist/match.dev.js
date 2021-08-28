"use strict";

var _uuid = require("uuid");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Match =
/*#__PURE__*/
function () {
  _createClass(Match, null, [{
    key: "TEAM_ONE",
    get: function get() {
      return "team_one";
    }
  }, {
    key: "TEAM_TWO",
    get: function get() {
      return "team_two";
    }
  }]);

  function Match(team_one, team_two) {
    _classCallCheck(this, Match);

    this.id = (0, _uuid.v4)();
    this.team_one = team_one;
    this.team_two = team_two;
    this.winner = null;
    this.score_one = 0;
    this.score_two = 0;
  }

  _createClass(Match, [{
    key: "setWinner",
    value: function setWinner(winner) {
      this.winner = winner;
    }
  }, {
    key: "matchEnded",
    value: function matchEnded() {
      return this.winner !== null;
    }
  }]);

  return Match;
}();