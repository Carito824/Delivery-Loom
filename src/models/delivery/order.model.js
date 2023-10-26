const {ObjectId} = require('mongobd');
const path = require('path');
const BaseModel = require(
  path.resolve(
    path.dirname(require.main.filename), 
    'src/models/base/base.model',
  )
);
/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *      type: object
 *      required:
 *        - items_id
 *      properties:
 *        id: 
 *          type: string
 *          description: order model Id.
*        items_id:
 *          type: array
 *          description: order model items_id.
 *        total:
 *          type: number
 *          description: order model total.
 *        address:
 *          type: string
 *          description: order model address.
 *      example:
 *        id: ""
 *        items_id: ["Comida"]
 *        total: "$"
 *        addrees: "Calle / Carrera"
 */

class OrderModel extends BaseModel {

  constructor(args, dependencies) {

    if (!args || !dependencies) {
      throw new Error('Required args and dependencies to build this entity');
    } 
      super(dependencies); 

    /* Base Properties */
    this._dependencies = dependencies;
    this._utilities = this._dependencies.utilities;
    this._dataTypesManager = this._dependencies.DataTypesManager;
    
    /* Custom Properties */
    this._types = this._dataTypesManager.types;

    /* Assigments */
    const timestamp = this._utilities.generator.time.timestamp();

    /* Base Properties */
    this.last_modification = { value: timestamp, type: this._types.timestamp };
    this.id = { value: args.id, type: this._types.bigserial, isPK: true };
    this.date_creation = { value: timestamp, type: this._types.timestamp };
    this.last_user_modification = {
      value: args.user_id,
      type: this._types.object,
    };
    this.status = {
      value: args.status || OrderModel.statuses.active,
      type: this._types.object,
    };

    
    /* Custom fields */

    this.items_id = {
      value: args.items_id,  
      type: this._types.arrayOf(this._types.objectId)
    };

    this.total = {
      value: args.total,  
      type: this._types.number
    };
    this.address = { 
      value: args.address,
      type: this._types.string
    };
 
  }

  get sanitized() {
    return {
      id: this.id.value || this.id.type.default,
      items_id: this.items_id.value || this.items_id.type.default,
      total: this.total.value || this.total.type.default,
      address: this.address.value || this.address.type.default,
      
    };
    
  }

  get get() {
    return {
      id: this.id.value || this.id.type.default,
      date_creation:
        this.date_creation.value || this.date_creation.type.default,
      last_modification:
        this.last_modification.value || this.last_modification.type.default,
      last_user_modification:
        this.last_user_modification.value || this.last_user_modification.type.default,
      status: this.status.value || this.status.type.default,
      items_id: this.items_id.value || this.items_id.type.default,
      total: this.total.value || this.total.type.default,
      address: this.address.value || this.address.type.default,
      
    };
  }
}

OrderModel.statuses = {
  inactive: { id: 1, name: 'inactive', title: 'Inactive' },
  active: { id: 2, name: 'active', title: 'Active' },
  deleted: { id: 999, name: 'deleted', title: 'Deleted' },
};
module.exports = OrderModel;