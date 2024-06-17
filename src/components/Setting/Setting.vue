<script setup>
import { ref } from 'vue';

const userInfo = ref({
  username: 'johndoe',
  email: 'johndoe@example.com'
});

const passwords = ref({
  current: '',
  new: '',
  confirm: ''
});

const selectedTheme = ref('light');

const updateUserInfo = () => {
  console.log('User information updated:', userInfo.value);
};

const changePassword = () => {
  if (passwords.value.new !== passwords.value.confirm) {
    alert('New password and confirmation do not match!');
    return;
  }
  console.log('Password changed:', passwords.value);
};

</script>

<template>
  <h1 class="title">Settings</h1>
  <div class="setting-container">
    <div class="setting-img">
      <img src="../../assets/astronaut2.png" alt="" class="image">
    </div>
    <div class="setting-form">
      <section class="section">
        <h2 class="section-title">User Information</h2>
        <form @submit.prevent="updateUserInfo">
          <div class="form-group">
            <div class="form-label">
              <label for="username">Username:</label>
            </div>
            <input type="text" id="username" v-model="userInfo.username" />
          </div>
          <div class="form-group">
            <div class="form-label">
              <label for="email">Email:</label>
            </div>
            <input type="email" id="email" v-model="userInfo.email" />
          </div>
          <button type="submit">Update Information</button>
        </form>
      </section>

      <section class="section">
        <h2 class="section-title">Change Password</h2>
        <form @submit.prevent="changePassword">
          <div class="form-group">
            <div class="form-label">
              <label for="current-password">Current Password:</label>
            </div>
            <input type="password" id="current-password" v-model="passwords.current"
              placeholder="Your current password" />
          </div>
          <div class="form-group">
            <div class="form-label">
              <label for="new-password">New Password:</label>
            </div>
            <input type="password" id="new-password" v-model="passwords.new" placeholder="Your new password" />
          </div>
          <div class="form-group">
            <div class="form-label">
              <label for="confirm-password">Confirm New Password:</label>
            </div>
            <input type="password" id="confirm-password" v-model="passwords.confirm"
              placeholder="Confirm your new password" />
          </div>
          <button type="submit">Change Password</button>
        </form>
      </section>

      <!-- Theme Selection Section -->
      <section class="section">
        <h2 class="section-title">Theme Selection</h2>
        <div class="form-group">
          <div class="form-label">
            <label for="theme">Select Theme:</label>
          </div>
          <select id="theme" v-model="selectedTheme" @change="updateTheme">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>

.setting-container {
  width: 100%;
  display: flex;
  padding: 20px;
  background: var(--secondary-color);
  padding: 20px 30px;
  border-radius: 20px;
  justify-content: space-around;
}

.setting-form {
  width: 40%;
}

.section {
  margin-bottom: 30px;
}

.section-title {
  font-weight: 600;
  font-size: 20px;
  padding-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
  display: flex;
}

.form-label {
  width: 200px;
  margin-left: 20px;
  display: flex;
  align-items: center;
}

form input,
textarea:focus-visible {
  outline: none;
}

form input,
textarea {
  padding: 10px;
  border-radius: 10px;
  color: var(--text-color);
  background: none;
  border: 1px solid rgb(219, 219, 219);
}

form input {
  width: 300px;
}

form button {
  padding: 10px 25px;
  background-color: #925B80;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

form button:hover {
  background-color: #72375e;
}

select {
  background: none;
  padding: 10px 25px;
  border-radius: 20px;
  color: var(--text-color);
}

select option {
  color: black;
  font-weight: 700;
}

.setting-img {
  width: 40%;
}

.setting-img img {
  position: relative;
  margin-left: 20%;
}

.image {
  position: absolute;
  opacity: 0;
  top: -50px;
  width: 75%;
  animation: fadeIn 1s forwards;
}

</style>