var app = new Vue({
  el: '#root',
  data: {
    currIndex: null,
    inputText: '',
    todos: [
      {
        title: 'Jogging',
        status: 'todo'
      },

      {
        title: 'Go to KFC',
        status: 'todo'
      },

      {
        title: 'Dating with my girlfriend',
        status: 'todo'
      },

      {
        title: 'Doing homework',
        status: 'todo'
      },
    ],
  },

  computed: {
    todosComputed: function () {
      let todosDone = this.todos.filter((todo) => todo.status == 'done');
      let todosTodo = this.todos.filter((todo) => todo.status == 'todo');
      return [...todosTodo, ...todosDone];
    }
  },

  methods: {
    add: function () {
      if (this.inputText != '') {
        if (this.currIndex == null) {
          let obj = {
            title: this.inputText,
            status: 'todo'
          }
          this.todos.push(obj);
          
        } else {
          this.todos[this.currIndex].title = this.inputText;
          this.currIndex = null;
        }
        this.inputText = '';
      }
    },

    check: function (todo) {
      let index = this.todos.indexOf(todo);
      this.todos[index].status = 'done';
    },

    remove: function (todo) {
      let index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },

    edit: function (todo) {
      let index = this.todos.indexOf(todo);
      this.inputText = this.todos[index].title;
      this.currIndex = index;
    }
  }
});
