<template>
  <div class="app">
    <div class="user-list">
      <UserCard v-for="user in users" :key="user.email" :user="user" />
    </div>
  </div>
</template>

<script>
import UserCard from './components/UserCard.vue';
import randomuserService from '@/include/api/services/randomuser.service.js';

/**
 * @typedef {Object} User
 * @property {Object} name - Полное имя пользователя.
 * @property {string} name.first - Имя.
 * @property {string} name.last - Фамилия.
 * @property {Object} picture - Фото пользователя.
 * @property {string} picture.medium - Ссылка на фото среднего размера.
 * @property {string} email - Электронная почта пользователя.
 */

/**
 * Главный компонент приложения, содержащий логику бесконечной прокрутки.
 */
export default {
  components: {
    UserCard,
  },
  data() {
    return {
      /**
       * Массив объектов пользователей.
       * @type {User[]}
       */
      users: [],

      /**
       * Номер страницы для загрузки данных.
       * @type {number}
       */
      page: 1,

      /**
       * Состояние загрузки данных.
       * @type {boolean}
       */
      loading: false,
    };
  },
  mounted() {
    this.fetchUsers(); // Загружаем пользователей после монтирования
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    /**
     * Загружает список пользователей с API.
     * @returns {Promise<void>}
     */
    async fetchUsers() {
      if (this.loading) return;
      this.loading = true;
      try {
        const data = await randomuserService.getUsers({ page: this.page, results: 10 });
        /** @type {User[]} */
        this.users = [...this.users, ...data.results];
        this.page += 1;
      } catch (error) {
        console.error('Ошибка при загрузке пользователей:', error);
      } finally {
        this.loading = false;
      }
    },

    /**
     * Обрабатывает событие прокрутки и вызывает загрузку новых данных, если достигнут конец страницы.
     */
    handleScroll() {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 200;
      if (scrollPosition >= threshold) {
        this.fetchUsers();
      }
    },
  },
};
</script>
