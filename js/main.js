const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Vue email list",
      emailArray: [],
      loading: false,
    };
  },

  methods: {
    generateEmail() {
      this.loading = true;
      for (let i = 0; i < 10; i++) {
        (this.emailArray = []),
          axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
              this.emailArray.push(result.data.response);
              console.log(result.data.response);
              if (this.emailArray.length == 10) {
                this.loading = false;
              }
            });
      }
    },
  },
}).mount("#app");
