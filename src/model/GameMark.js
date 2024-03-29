/**
 * Minesweeper
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Minesweeper) {
      root.Minesweeper = {};
    }
    root.Minesweeper.GameMark = factory(root.Minesweeper.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GameMark model module.
   * @module model/GameMark
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GameMark</code>.
   * @alias module:model/GameMark
   * @class
   * @param gameId {Number} Game id
   * @param x {Number} Position in x starting with 0
   * @param y {Number} Position in y starting with 0
   */
  var exports = function(gameId, x, y) {
    var _this = this;

    _this['game_id'] = gameId;
    _this['x'] = x;
    _this['y'] = y;
  };

  /**
   * Constructs a <code>GameMark</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GameMark} obj Optional instance to populate.
   * @return {module:model/GameMark} The populated <code>GameMark</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('game_id')) {
        obj['game_id'] = ApiClient.convertToType(data['game_id'], 'Number');
      }
      if (data.hasOwnProperty('x')) {
        obj['x'] = ApiClient.convertToType(data['x'], 'Number');
      }
      if (data.hasOwnProperty('y')) {
        obj['y'] = ApiClient.convertToType(data['y'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Game id
   * @member {Number} game_id
   */
  exports.prototype['game_id'] = undefined;
  /**
   * Position in x starting with 0
   * @member {Number} x
   */
  exports.prototype['x'] = undefined;
  /**
   * Position in y starting with 0
   * @member {Number} y
   */
  exports.prototype['y'] = undefined;



  return exports;
}));


