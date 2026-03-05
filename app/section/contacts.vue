// Xavier Ribeiro
// u25398441

<script setup>
</script>

<template>
  <div class="card">
    <h1 class="title">Contact Form</h1>
    
    <form name="contact" method="POST" netlify class="form">
      <p>
        <label class="label">Your Name and Surname: <input type="text" name="name" class="input" />
        </label>
      </p>
      <p>
        <label class="label">Your Email: <input type="email" name="email" class="input" />
        </label>
      </p>
      <p>
        <label class="label">Your Telephone Number: <input type="text" name="number" class="input" />
        </label>
      </p>
      <p>
        <label class="label">Your Job: <select name="job[]" multiple class="dropdown">
          <option value="Employee">Employee</option>
          <option value="Employer">Employer</option>
          <option value="Student">Student</option>
        </select></label>
      </p>
      <p>
        <button type="submit" class="send">Send</button>
      </p>
    </form>
  </div>
</template>

<style scoped>
 .card { background: #1e293b;
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 40px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.4);
}

.title { color: #38bdf8;
  margin-bottom: 20px;
}

.form { display: flex;
  flex-direction: column;
  gap: 15px;
}

.label {
  color: #38bdf8;
  font-weight: 600;
  display: block;
  margin-bottom: 6px;
  letter-spacing: 0.5px;
}

.input, .dropdown {
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  border: none;
}

.send {
  padding: 10px;
  border-radius: 8px;
  border: none;
  background: #38bdf8;
  color: white;
  cursor: pointer;
}

.send:hover {
  background: #0ea5e9;
}
</style>