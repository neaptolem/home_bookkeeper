(function () {
  require('ydn.db')

  var schema = {
    stores: [{
      name: 'todo',
      keyPath: "timeStamp"
    }]
  };

  /**
   * Create and initialize the database. Depending on platform, this will
   * create IndexedDB or WebSql or even localStorage storage mechanism.
   * @type {ydn.db.Storage}
   */
  var db = new ydn.db.Storage('todo_2', schema);
  window.db = db;
  var deleteTodo = function (id) {
    db.remove('todo', id).fail(function (e) {
      console.error(e);
    });

    getAllTodoItems();
  };

  var getAllTodoItems = function () {
    var todos = document.getElementById("todoItems");
    todos.innerHTML = "";

    var df = db.values('todo');

    df.done(function (items) {
      var n = items.length;
      for (var i = 0; i < n; i++) {
        i % 10 === 0 && renderTodo(items[i]);
      }
    });

    df.fail(function (e) {
      console.error(e);
    })
  };

  var renderTodo = function (row) {
    var todos = document.getElementById("todoItems");
    var li = document.createElement("li");
    var a = document.createElement("a");
    var t = document.createTextNode(row.text);

    a.addEventListener("click", function () {
      deleteTodo(row.timeStamp);
    }, false);

    a.textContent = " [Delete]";
    li.appendChild(t);
    li.appendChild(a);
    todos.appendChild(li)
  };

  window.put = (dat, res) => {

    var data = {
      "text": dat,
      "timeStamp": new Date().getTime()
    };
    db.put('todo', data)
      .fail(function (e) {
        console.error(e);
        res && res()
      })
      .then(() => {
        res && res();
      })
  };

  var addTodo = function () {
    var todo = document.getElementById("todo");

    window.put(todo.value);

    todo.value = "";

    getAllTodoItems();
  };

  function init() {
    getAllTodoItems();
  }

  db.onReady(function () {
    init();
  });
});