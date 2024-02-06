const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Vue email list",
      emailArray: [],
    };
  },

  methods: {
    generateEmail() {
      this.emailArray = [];
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((result) => {
            this.emailArray.push(result.data.response);
            console.log(result.data.response);
            console.log(this.emailArray);
          });
      }
    },
  },
}).mount("#app");
