import { defineComponent } from 'vue';
import Login from '@/components/login/Login.vue';

const pO = require('@/assets/parts.json');

export default defineComponent({
  data() {
    return {
      particlesOptions: pO,
    };
  },
  components: { Login },
  computed: {},
  methods: {},
});
