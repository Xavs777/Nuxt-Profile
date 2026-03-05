// Xavier Ribeiro
// u25398441

<script setup>
  import { ref, onMounted } from 'vue'

  const stocks = ref(null)
  const error = ref(null)
  const API_KEY = "cdf502dd0503cb648d16d71cbabf9f35"

  const getStockData = async () => {
    try {
      const response = await fetch(
        `http://api.marketstack.com/v1/eod?access_key=${API_KEY}&symbols=AAPL`
    )
      const data = await response.json()
        stocks.value = data
  } 
    catch (err) {
      error.value = err.message
  }
}

onMounted(() => {
  getStockData()
})
</script>

<template>
  <div class="card">
    <h1 class="title">Project History</h1>

    <ul class="project-list">
      <li>IMY 110 HTML/CSS Website Project</li>
      <li>IMY 120 Animation Project</li>
      <li>ALL 121 Business Presentation</li>
    </ul>
  </div>

  <div class="card">
    <h1 class="title">Stocks</h1>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-else-if="!stocks" class="loading">
      Loading stocks...
    </div>

    <div v-else class="stock-display">
      <p><strong>Symbol: {{ stocks.data[0].symbol }}</strong></p>
      <p>Close Price: ${{ stocks.data[0].close }}</p>
      <p>Date: {{ stocks.data[0].date }}</p>
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

.project-list { color: #e2e8f0;
  padding-left: 20px;
}

.project-list li { margin-bottom: 10px;
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

.stock-display { color: #e2e8f0;
  font-size: 18px;
}

</style>