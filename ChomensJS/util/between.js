module.exports = {
  /**
   * this code is from somewhere i can't remember...
   * @param {Number} min
   * @param {Number} max
   * @return {Number}
   */
  between: function (min, max) {
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }
}
