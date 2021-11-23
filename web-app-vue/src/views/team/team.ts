import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      github: [
        {
          Name: 'Nelu',
          LinkNeluQi: 'https://github.com/NeluQi',
        },
        {
          Name: 'Clayers',
          Linkclosethereport: 'https://github.com/closethereport',
        },
        {
          Name: 'closethereport',
          LinkClayers: 'https://github.com/Clayers',
        },
      ],
    };
  },
  components: {},
  computed: {},
  methods: {
    redirectTo(url) {
      window.location.href = url;
    },
  },
});
