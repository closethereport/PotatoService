import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      login: '',
      password: '',
    };
  },
  components: {},
  computed: {},
  methods: {
    loginaut() {
      this.login = '';
      this.password = '';
    },
  },
});
