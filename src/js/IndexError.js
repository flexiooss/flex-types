export class IndexError extends Error {
  constructor(message = '', ...params) {
    super(...params)
    this.message = message
    this.name = this.constructor.name
    this.key = null
  }

  /**
   *
   * @param {string} key
   * @return {IndexError}
   */
  setKey(key) {
    this.key = key
    return this
  }

  /**
   * @param {string} key
   * @return {IndexError}
   */
  static BAD_ARRAY_KEY(key) {
    return new IndexError('Array have not this index')
      .setKey(key)
  }

  toString() {
    return ` ${this.name} --- ${this.message} : ${this.key} `
  }
}


