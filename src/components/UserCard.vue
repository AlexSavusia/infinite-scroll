<template>
  <div class="user-card">
    <img :src="user.picture.medium" alt="User photo" class="user-card__photo" />
    <div class="user-card__info">
      <p class="user-card__name">{{ user.name.first }} {{ user.name.last }}</p>
      <p class="user-card__email">{{ user.email }}</p>
    </div>
  </div>
</template>

<script>
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
 * Компонент для отображения карточки пользователя.
 */
export default {
  props: {
    /**
     * Объект данных пользователя.
     * @type {User}
     * @required
     */
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.user-card {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  max-width: 320px;
  margin: 1rem auto;
  transition: transform 0.3s ease;
}

.user-card:hover {
  transform: scale(1.02);
}

.user-card__photo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 2px solid #4a90e2;
}

.user-card__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.user-card__name {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.user-card__email {
  font-size: 0.9rem;
  color: #666;
  margin: 0.2rem 0 0;
}
</style>
