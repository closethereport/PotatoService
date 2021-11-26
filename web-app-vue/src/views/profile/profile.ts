import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      Login: 'Clay',
      Email: 'Claydralthiace@gmail.com',
      Name: 'Vadim',
      Surname: 'Kalin',
      Patronymic: 'Vasilievish',
      selectcourse: null,
      Courses: [
        {
          Course: '1 Курс',
          code: '1',
        },
        {
          Course: '2 Курс',
          code: '2',
        },
        {
          Course: '3 Курс',
          code: '3',
        },
        {
          Course: '4 Курс',
          code: '4',
        },
        {
          Course: '5 Курс',
          code: '5',
        },
      ],
      Group: 'IKPI-83',
      Specialization: 'Software Engineering',
      items: [
        {
          Name: 'OBZH',
        },
        {
          Name: 'Sociology',
        },
        {
          Name: 'Philosophy',
        },
      ],
    };
  },
  components: {},
  computed: {},
  methods: {},
});
