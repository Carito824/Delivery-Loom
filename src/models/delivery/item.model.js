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
 *     Item:
 *      type: object
 *      required:
 *        - name
 *        - menuid
 *      properties:
 *        id: 
 *          type: string
 *          description: item model Id.
 *        name:
 *          type: string
 *          description: item model name.
 *        price:
 *          type: number
 *          description: item model price.
 *        menuid:
 *          type: string
 *          description: tipo de menuid.
 *      example:
 *        id: ""
 *        name: "Comida"
 *        price: "$"
 *        menuid: "hjfghfch45354345nbhbbbbb"
 */

class ItemModel extends BaseModel {

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
      value: args.status || ItemModel.statuses.active,
      type: this._types.object,
    };

    
    /* Custom fields */
    this.name = { 
      value: args.name,
      type: this._types.string
    };
    
    this.price = {
      value: args.price,  
      type: this._types.number
    };
    this.menuid = {
      value: args.menuid,  
      type: this._types.string
    };

  }

  get sanitized() {
    return {
      id: this.id.value || this.id.type.default,
      name: this.name.value || this.name.type.default,
      price: this.price.value || this.price.type.default,
      menuid: this.menuid.value || this.menuid.type.default,
      
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
      name: this.name.value || this.name.type.default,
      price: this.price.value || this.price.type.default,
      menuid: this.menuid.value || this.menuid.type.default,
      
    };
  }
}

ItemModel.statuses = {
  inactive: { id: 1, name: 'inactive', title: 'Inactive' },
  active: { id: 2, name: 'active', title: 'Active' },
  deleted: { id: 999, name: 'deleted', title: 'Deleted' },
};
module.exports = ItemModel;