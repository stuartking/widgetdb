
// simulated latency in ms
const LATENCY = 100;

/** 
 * Class representing a Widget Database. Before any operations
 * are performed against the in-memory datastore, a short timeout
 * takes place to simulate network latency and to create an asynconous
 * transaction.
 */
class WidgetDB {
  
  /**
   * Create an empty Widget Database.
   */
  constructor() {
    this.db = {}
  }

  /**
   * Get a widget by its id.
   * @param {String} id - The widget id
   * @return {Promise<object>} A promise that contiains 
   * the value of the widget when fulfilled.
   */
  get(id) {
    return wait().then(() => this.db[id])
  }

  /**
   * Stores a new value for a widget
   * @param {String} id    - The widget id
   * @param {Object} value - The value of the widget
   * @return {Promise<object>} A promise that contiains 
   * the value stored when fulfilled.
   */
  put(id, value) {
    return wait().then(() => this.db[id] = value)
  }
}

/**
 * A function to simulate latency in a system
 * @return {Promise} An empty promise that is fulfilled
 * after a period of time defined by the LATENCY constant.
 */
function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, LATENCY)
  })
}

module.exports = new WidgetDB()