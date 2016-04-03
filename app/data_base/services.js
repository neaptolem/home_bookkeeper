require('ydn.db');
angular.module('app.service.data', []).factory('database', function() {
  var tag_schema = {
      name: 'tag',
      keyPath: 'name'
    },
    item_schema = {
      name: 'item',
      keyPath: "id",
      autoIncrement: true,
      indexes: [{
        keyPath: 'id',
        unique: true
      }, {
        keyPath: 'name'
      }, {
        keyPath: 'type'
      }, {
        keyPath: 'date'
      }, {
        keyPath: 'price'
      }, {
        keyPath: 'currency'
      }, {
        keyPath: 'tags',
        multiEntry: true
      }]
    },
    schema = {
      stores: [tag_schema, item_schema]
    },
    normalizeRow = function(val) {
      var strValidate = val => val ? val : "";
      var date = val.date;
      date = date instanceof Date && !isNaN(date.valueOf()) ? date.valueOf() : -1;
      return {
        name: strValidate(val.name),
        type: strValidate(val.type),
        date: date,
        price: val.price ? val.price : 0,
        currency: strValidate(val.currency),
        tags: Array.isArray(val.tags) ? val.tags : []
      };
    },
    onErr = (err, rej) => {
      console.log(err);
      rej(err);
    },
    create = function() {
      db = new ydn.db.Storage('items-storage', schema);
      window.db = db;
      return new Promise((res, rej) => {
        db.onReady(err => {
          if (err) {
            onErr(err, rej);
          }
          res();
        });
      });
    },
    putOptions = {
      name: 'item',
      keyPath: 'id'
    },
    databaseFuncs = {
      put: obj => db.put(putOptions, normalizeRow(obj)),
      putAll: objects => db.putAll(putOptions, objects.map(obj => normalizeRow(obj))),
      getAll: () => db.values('item'),
      remove: id => db.remove('item', id)
    },
    outObj = {},
    db;

  function onReq(req) {
    return new Promise((res, rej) => {
      req.done(function(key) {
        res(key);
      });
      req.fail(function(e) {
        onErr(e, rej);
      });
    });
  }

  var databaseFuncsArr = [];
  for (param in databaseFuncs) {
    databaseFuncsArr.push(param);
  }
  databaseFuncsArr.forEach(name => {
    outObj[name] = function() {
      if (!db) {
        return create()
          .then(() => onReq(databaseFuncs[name].apply(this, arguments)));
      } else {
        return onReq(databaseFuncs[name].apply(this, arguments));
      }
    }
  });

  outObj.db = db;
  outObj.create = create;

  return outObj;
});