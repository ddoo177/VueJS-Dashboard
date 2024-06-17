<script setup>

</script>

<template>
  <h1 class="title">Report</h1>
  <div class="report">
    <div class="report-form">
      <div className="report-container_info">
        <h1>Contact us for work</h1>
        <p>Let's start a project, schedule a talk and don't hesitate to say hello</p>
      </div>
      <div className="report-container_form">
        <form className="report_form">
          <label htmlFor="fullName">Full name</label>
          <input type="text" id="fullName" placeholder="Your full name" />

          <label htmlFor="email">Email address</label>
          <input type="email" id="email" placeholder="Your email address" />

          <label htmlFor="phoneNumber">Phone number</label>
          <input type="email" id="phoneNumber" placeholder="Your phone number" />

          <label htmlFor="information">Say something</label>
          <textarea id="information" placeholder="Say something to us" />

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
    <div class="report-img">
      <img src="../../assets/images/astronaut.png" alt="" class="image">
    </div>
  </div>
</template>

<style scoped>
.report {
  padding: 30px;
  background: var(--secondary-color);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  max-height: max-content;
}

.report-form {
  width: 40%;
  padding: 30px 40px;
}

.report-container_info h1 {
  font-size: 23px;
  font-weight: bold;
}

.report-container_info p {
  padding: 15px 0 30px 0;
}

.report_form {
  display: flex;
  flex-direction: column;
}

.report_form label {
  font-weight: 500;
  margin-bottom: 10px;
}

.report_form input,
textarea:focus-visible {
  outline: none;
}

.report_form textarea {
  max-width: 100%;
  min-height: 100px;
  height: fit-content;
}

.report_form input,
textarea {
  padding: 10px 15px;
  border-radius: 10px;
  color: var(--text-color);
  margin: 5px 0 15px 0;
  background: none;
  border: 1px solid rgb(219, 219, 219);
}

.report_form button {
  background: #925b80;
  padding: 10px 25px;
  color: white;
  cursor: pointer;
  border: none;
  width: fit-content;
  border-radius: 20px;
}

.report_form button:hover {
  opacity: 0.8;
}

.report-img {
  width: 50%;
}

.report-img img {
  position: relative;
  margin-left: 20%;
}

.image {
  position: absolute;
  opacity: 0;
  width: 80%;
  animation: fadeIn 1s forwards;
}

</style>