import { defineComponent } from 'vue';

const pO = require('@/assets/parts.json');

export default defineComponent({
  data() {
    return {
      particlesOptions: pO,
    };
  },
  components: {},
  computed: {},
  methods: {},
});
