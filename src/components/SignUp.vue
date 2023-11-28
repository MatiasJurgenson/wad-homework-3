<template>
  <div>
    <div class="signup">
      <h1>Sign up</h1>
      <form v-on:submit.prevent="onSubmit" @submit="submitForm">
        <div class="signupfields">
          <div class="signupfield">
            <label for="email">Email</label><br>
            <input type="email" name="email" placeholder="Email" required>
          </div>
          <div class="signupfield">
            <label for="password">Password</label><br>
            <input type="password" name="password" placeholder="Password" required v-model="password">
          </div>
          
          <span v-if="!isPasswordLengthValid" class="error">Password must be between 8 and 15 characters.</span>
          <span v-if="!isPasswordWithOneCapitalAlphaChar" class="error">Password must contain at least one capital letter.</span>
          <span v-if="!isPasswordWithTwoAlphaChars" class="error">Password must contain at least two lower case letters.</span>
          <span v-if="!isPasswordWithOneNumber" class="error">Password must contain at least one number.</span>
          <span v-if="!isFirstCharUpperCase" class="error">Password must start with an uppercase letter.</span>
          <span v-if="!isPasswordWithUnderscore" class="error">Password must contain at least one underscore.</span>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      isPasswordLengthValid: true,
      isPasswordWithTwoAlphaChars: true,
      isPasswordWithOneCapitalAlphaChar: true,
      isPasswordWithOneNumber: true,
      isFirstCharUpperCase: true,
      isPasswordWithUnderscore: true,
    };
  },
  methods: {
    submitForm() {
      console.log(this.password);
      if (this.password.length > 8 && this.password.length < 15) {
        this.isPasswordLengthValid = true;
      } else {
        this.isPasswordLengthValid = false;
      }
      if (this.password.charAt(0).match(/[A-Z]/)) {
        this.isFirstCharUpperCase = true;
      } else {
        this.isFirstCharUpperCase = false;
      }
      if (this.password.match(/[a-z]{2}/)) {
        this.isPasswordWithTwoAlphaChars = true;
      } else {
        this.isPasswordWithTwoAlphaChars = false;
      }
      if (this.password.match(/[0-9]/)) {
        this.isPasswordWithOneNumber = true;
      } else {
        this.isPasswordWithOneNumber = false;
      }
      if (this.password.match(/[A-Z]/)) {
        this.isPasswordWithOneCapitalAlphaChar = true;
      } else {
        this.isPasswordWithOneCapitalAlphaChar = false;
      }
      if (this.password.match(/[_]/)) {
        this.isPasswordWithUnderscore = true;
      } else {
        this.isPasswordWithUnderscore = false;
      }
      if (this.isPasswordLengthValid && this.isFirstCharUpperCase && this.isPasswordWithTwoAlphaChars && this.isPasswordWithOneNumber && this.isPasswordWithOneCapitalAlphaChar && this.isPasswordWithUnderscore) {
        this.$router.push('/');
      }
    }
  }
}
</script>

<style scoped>

label {
  text-align: right;
  margin:auto;
  margin-right: 0px;
}

.signup {
    background-color: var(--teritary-color);
    border-radius: 5px;
    margin: auto;
    margin-top: 100px;
    max-width: 300px;
    text-align: center;
    padding: 5px 5px 20px 5px;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0);
    transition: box-shadow 0.4s ease, transform 0.3s ease;
    color: var(--dark-text);
}

.signup:hover {
    box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.5);
    transform: scale(1.05);
}

.signupfields {
    display: flex;
    flex-direction: column;
}

.signupfield {
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin: 5px;
}

.error {
  color: red;
  font-style: italic;
}

input {
    margin: 5px;
    padding: 5px;
}

@media (max-width: 1000px) {
    body {
        padding-top: 150px; 
    }
    .signup {
        margin-top: 50px;
    }
    .signup:hover {
        box-shadow: none;
        transform: none;
    }
}
</style>
