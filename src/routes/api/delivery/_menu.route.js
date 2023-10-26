class MenuRoute {

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
    this.EntityService = this._services.MenuService;

 }

  /**
   * @swagger
   * /delivery/menu/{queryselector}:
   *   get:
   *     summary: Get an menu by query selector.
   *     description: Returns the menu information that matches the query selector an search specified in the route.
   *     tags:
   *       - Menu
   *     parameters:
   *       - in: path
   *         name: queryselector
   *         description: Is the filter available for this query
   *         required: true
   *         schema:
   *           enum:
   *              - id
   *              - name
   *              - description
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
   *                     $ref: '#/components/schemas/Menu'
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
   * /delivery/menu/:
   *   post:
   *     summary: Create a new menu
   *     description: Creates a new menu with the data provided
   *     tags:
   *       - Menu
   *     requestBody:
   *       description: Menu data
   *       required: true
   *       content:
   *         application/json:  
   *           schema:
   *             $ref: '#/components/schemas/Menu'
   *     responses:
   *       200:
   *         description: Menu created
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Response'
   *             examples:
   *               Success:
   *                 value:
   *                   status: 200  
   *                   success: true
   *                   message: Menu created
   *                   result:
   *                     $ref: '#/components/schemas/Menu'
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
   * /delivery/menu/:
   *   patch:
   *     summary: Update an menu
   *     description: Updates an existing menu with the data provided
   *     tags: 
   *       - Menu  
   *     requestBody:
   *       description: Menu data
   *       required: true
   *       content:
   *         application/json:
   *           schema: 
   *             $ref: '#/components/schemas/Menu'
   *     responses:
   *       200:
   *         description: Menu updated
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Response'
   *             examples:
   *               Success:
   *                 value:
   *                   status: 200
   *                   success: true
   *                   message: Menu updated
   *                   result:
   *                     $ref: '#/components/schemas/Menu'
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
   * /delivery/menu/:
   *   delete:
   *     summary: Delete an menu
   *     description: Deletes an menu by the ID provided
   *     tags:
   *       - Menu
   *     requestBody:
   *       description: Menu ID
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
   *         description: Menu deleted
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Response'
   *             examples:
   *               Success:
   *                 value:
   *                   status: 200
   *                   success: true
   *                   message: Menu deleted
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

module.exports = MenuRoute;