import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      LinkClayers: 'https://github.com/Clayers',
      LinkClosethereport: 'https://github.com/closethereport',
      LinkNelu: 'https://github.com/NeluQi',
    };
  },
  components: {},
  computed: {},
  methods: {
    redirectTo(url) {
      window.open(url, '_blank');
    },
  },
});
