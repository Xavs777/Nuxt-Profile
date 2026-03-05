// Xavier Ribeiro
// u25398441

<script setup>
import { ref, onMounted } from 'vue'

const weather = ref(null)
const error = ref(null)

const getWeather = async () => {
  try {
    const response = await $fetch('/api/weather')
    weather.value = response
  } catch (err) {
    error.value = err.message
  }
}

onMounted(() => {
  getWeather()
})

</script>

<template>
  <div class="card">
    <h1 class="title">My Information</h1>

      <div class="info">
        <div>
          <h3>Name:<span class="name">Xavier</span></h3>
          <h3>Surname:<span class="name">Ribeiro</span></h3>

          <h3>Bio:</h3>
          <p class="bio">
            I like video games, its what inspired me to take MultiMedia,
             I also enjoy football, it's my main hobby besides gaming. 
             I find coding challenging, but day by day i try toget better and 
             learn new things.
          </p>
        </div>

        <img src="/Pic.png" alt="my-face" class="image" />
      </div>
    </div>
    <div class="card">
      <h1 class="title">Weather</h1>

        <div v-if="error" class="error">
          {{ error }}
        </div>
        <div v-else-if="!weather" class="loading">
          Loading...
        </div>

        <div v-else class="weather-display">
          <p>🌡 Temperature: {{ weather.current.temperature }}°C</p>
          <p>☁ Status: {{ weather.current.weather_descriptions[0] }}</p>
        </div>
    </div>

</template>

<style scoped>
  .card { background: #364050;
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 40px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.4);
}

.title { color: #38bdf8;
  margin-bottom: 20px;
}

.info { display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.name { color: #a0c7e1;
}

.bio { color: #e2e8f0;
  line-height: 1.6;
}

.image { width: 180px;
  border-radius: 15px;
  object-fit: cover;
}

.error {
  color: crimson;
}

.loading { color: #22d3ee;
  animation: float 2s ease-in-out infinite;
}

@keyframes float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.weather-display { color: #e2e8f0;
  font-size: 18px;
}

</style>