var app = new Vue({
  el: '#root',
  data: {
    inputText: '',
    todos: [
      {
        title: 'Jogging',
        status: 'todo'
      },

      {
        title: 'Go to KFC',
        status: 'done'
      },

      {
        title: 'Dating with my girlfriend',
        status: 'done'
      },

      {
        title: 'Doing homework',
        status: 'todo'
      },
    ],
  },
  methods: {
    add: function () {
      if (this.inputText != '') {
        let obj = {
          title: this.inputText
        }

        this.todos.push(obj);
        this.inputText = '';
      }
    }
  }
});
