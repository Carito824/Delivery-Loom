class ItemRoute {

  constructor(dependencies) {
     /* Base Properties */
     this._dependencies = dependencies;
     this._utilities = this._dependencies.utilities;
     this._console = this._dependencies.console;
     this._services = this._dependencies.services;
 
     /* Custom Properties */
     /* this._myPrivateProperty = 'Some value' */
 
     /* Assigments */
     /* this._newPrivateObject = new SomeObject(this._dependencies) */
     this.EntityService = this._services.ItemService;
  }

  /**
   * @swagger
   * /delivery/item/{queryselector}:
   *   get:
   *     summary: Get an item by query selector.
   *     description: Returns the item information that matches the query selector an search specified in the route.
   *     tags:
   *       - Item
   *     parameters:
   *       - in: path
   *         name: queryselector
   *         description: Is the filter available for this query
   *         required: true
   *         schema:
   *           enum:
   *              - id
   *              - name
   *              - price
   *              - menuid
   *              - all
   *       - in: query
   *         name: search
   *         description: Keyword to search for entities.
   *         required: false
     *         schema:
   *           type: string
   *       - in: query
   *         name: include_status
   *         description: Optional status parameter to include templates of a specific status.
   *         required: false
   *         schema:
   *           type: string
   *         example: "active,inactive"
   *       - in: query
   *         name: exclude_status
   *         description: Optional status parameter to exclude templates of a specific status.
   *         required: false
   *         schema:
   *           type: string
   *         example: "deleted,blocked"
   *       - in: query
   *         name: skip
   *         description: Number of records to skip for pagination.
   *         required: false
   *         schema:
   *           type: integer
   *         example: 10
   *       - in: query
   *         name: limit
   *         description: Maximum number of records to return.
   *         required: false
   *         schema:
   *           type: integer
   *         example: 50 * 
   *     responses:
   *       200:
   *         description: OK
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Response' 
   *             examples:
   *               Success:
   *                 value:
   *                   status: 200
   *                   success: true
   *                   message: Operation completed successfully
   *                   result:
   *                     $ref: '#/components/schemas/Item'
   *       
   *       500:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Response'
   *             examples:
   *               Error:
   *                 value: 
   *                   status: 500
   *                   success: false
   *                   message: Something went wrong
   *                   result: null
   */
  
  async get({ params }) {
    try {
      const entityService = new this.EntityService(this._dependencies);

      return entityService.get(params);
    } catch (error) {
      this._console.error(error);
      return this._utilities.io.response.error();
    }
  }
  /**
   * @swagger
   * /delivery/item/:
   *   post:
   *     summary: Create a new item
   *     description: Creates a new item with the data provided
   *     tags:
   *       - Item
   *     requestBody:
   *       description: Item data
   *       required: true
   *       content:
   *         application/json:  
   *           schema:
   *             $ref: '#/components/schemas/Item'
   *     responses:
   *       200:
   *         description: Item created
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Response'
   *             examples:
   *               Success:
   *                 value:
   *                   status: 200  
   *                   success: true
   *                   message: Item created
   *                   result:
   *                     $ref: '#/components/schemas/Item'
   *       500:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Response' 
   *             examples:
   *               Error:
   *                 value:
   *                   status: 500
   *                   success: false
   *                   message: Something went wrong
   *                   result: null
   */
  
  async create({ params }) {

    try {
      const entityService = new this.EntityService(this._dependencies);

      return entityService.create(params);
    } catch (error) {
      this._console.error(error);
      return this._utilities.io.response.error();
    }
  }

  /**
   * @swagger
   * /delivery/item/:
   *   patch:
   *     summary: Update an item
   *     description: Updates an existing item with the data provided
   *     tags: 
   *       - Item  
   *     requestBody:
   *       description: Item data
   *       required: true
   *       content:
   *         application/json:
   *           schema: 
   *             $ref: '#/components/schemas/Item'
   *     responses:
   *       200:
   *         description: Item updated
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Response'
   *             examples:
   *               Success:
   *                 value:
   *                   status: 200
   *                   success: true
   *                   message: Item updated
   *                   result:
   *                     $ref: '#/components/schemas/Item'
   *       500:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Response'
   *             examples:
   *               Error:
   *                 value:
   *                   status: 500
   *                   success: false 
   *                   message: Something went wrong
   *                   result: null
   */

  async update({ params }) {
    try {
      const entityService = new this.EntityService(this._dependencies);

      return entityService.update(params);
    } catch (error) {
      this._console.error(error);
      return this._utilities.io.response.error();
    }
  }

  /**
   * @swagger
   * /delivery/item/:
   *   delete:
   *     summary: Delete an item
   *     description: Deletes an item by the ID provided
   *     tags:
   *       - Item
   *     requestBody:
   *       description: Item ID
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               id:
   *                 type: string
   *             example:
   *               id: ""
   *     responses:
   *       200:
   *         description: Item deleted
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Response'
   *             examples:
   *               Success:
   *                 value:
   *                   status: 200
   *                   success: true
   *                   message: Item deleted
   *                   result: null
   *       500:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Response'
   *             examples:
   *               Error:
   *                 value:
   *                   status: 500
   *                   success: false
   *                   message: Something went wrong
   *                   result: null
   */
  
  async delete({ params }) {
    try {
      const entityService = new this.EntityService(this._dependencies);
      return entityService.delete(params);
    } catch (error) {
      this._console.error(error);
      return this._utilities.io.response.error();
    }
  


  }

}

module.exports = ItemRoute;