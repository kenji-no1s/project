new Vue({
  el: '#app',
  data () {
    return {
      message: 'Book List',
      books: null,
    }
  },
  mounted () {
    fetch(
      'https://script.google.com/macros/s/AKfycbyXuN9J5PgSvY1LtPS7NwXLxW1UBf8Alkl48gkL1_TCBW2Vh7Q/exec',
    )
      .then(res => res.json())
      .then(
      result => {
        this.books = result
      },
      error => {

      },
    );
  }
})