<template>
  <div id="numbers"
    class="section numbers container-fluid d-flex justify-content-center align-items-center flex-column p-0 pt-5 mt-5">
    <div class="col-12 text-center number-title mb-5 pb-3 pt-5">
      Score Wheel
    </div>
    <div class="col-md-6 col-12 p-0 m-0">
      <img data-aos="fade-in" class="img-fluid" src="@/assets/img/wheel.svg" alt="" />
    </div>
    <div data-aos="fade-in" class="col-12 pt-5 pb-4 mt-5">
      <h4>How does Copenhagen compare with previous CFP cities?</h4>
    </div>
    <div class="col-12 row justify-content-center ">
      <div class="d-flex flex-row flex-wrap justify-content-center">
        <div v-for="(score, index) in scores" :key="score" class="col-lg-2 col-auto row score pt-2 pb-2 py-5"
          :class="[showScores ? 'show-score' : '']">
          <div class="col-12 d-flex justify-content-center ">
            <span :class="[index === scores.length - 1 ? 'mon' : '']" class="number" :id="score.id"></span>
          </div>
          <div class="col-12 d-flex justify-content-center ">
            <span :class="[index === scores.length - 1 ? 'mon' : '']" class="city">{{ score.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 d-flex justify-content-center py-5">
      <div v-if="!showScores" @click="showScores = true" class="read-btn btn btn-outline-light">
        Show Scores
      </div>
      <MoreBtn v-else />
    </div>
  </div>
</template>
<script>
import { CountUp } from "countup.js";
export default {
  data() {
    return {
      count: null,
      showScores: false,
      scores: [
        {
          id: "berlin",
          name: "Berlin",
          val: "8.02",
        },
        { id: "nyc", name: "New York City", val: "7.29" },
        {
          id: "tokyo",
          name: "Tokyo",
          val: "6.51",
        },
        {
          id: "stockholm",
          name: "Stockholm",
          val: "6.58",
        },
        {
          id: "montreal",
          name: "Montréal",
          val: "6.57",
        },
        {
          id: "sydney",
          name: "Sydney",
          val: "6.94",
        },
        {
          id: "rotterdam",
          name: "Rotterdam",
          val: "6.10",
        },
        {
          id: "copenhagen",
          name: "Copenhagen",
          val: "7.54",
        },
      ],
      options: {
        enableScrollSpy: true,
        decimalPlaces: 2,
      },
    };
  },
  mounted() {
    for (let i = 0; i < this.scores.length; i++) {
      this.count = new CountUp(
        this.scores[i].id,
        this.scores[i].val,
        this.options
      );

    }
  },
  watch: {
    showScores() {
      for (let i = 0; i < this.scores.length; i++) {
        const count = new CountUp(
          this.scores[i].id,
          this.scores[i].val,
          this.options
        );
        count.start();
      }

    }
  }
};
</script>
<style scoped>
.score:nth-child(2) {
  transition-delay: 100ms;
}

.score:nth-child(3) {
  transition-delay: 200ms;
}

.score:nth-child(4) {
  transition-delay: 300ms;
}

.score:nth-child(5) {
  transition-delay: 400ms;
}

.score:nth-child(6) {
  transition-delay: 500ms;
}
.score:nth-child(7) {
  transition-delay: 600ms;
}
.score:nth-child(8) {
  transition-delay: 700ms;
}

.score {
  opacity: 0;
  transition: opacity 300ms ease;
}

.show-score {
  opacity: 1 !important;
}

.read-btn {
  padding: 0.8rem 2rem 0.8rem 2rem;
  /* border: 1px solid white; */
  border-radius: 30px;
  z-index: 1;
}

.read-btn:hover {
  cursor: pointer;
}

.number {
  overflow: visible;
  font-size: 2rem;
  color: #a0a592;
  text-align: center;
  line-height: 2rem;
}

h4 {
  color: #e8fcd4;
  text-align: center;
}

.mon {
  color: #e8fcd4 !important;
  font-family: SkModernistBold;
}

.city {
  text-align: center;
  color: #a0a592;

}

.number-title {
  line-height: 2rem;
  font-size: 1.8rem;
  color: #e8fcd4;
}

.numbers {
  height: auto;
  min-height: 100vh;
}

@media (min-width: 768px) {

  .number {
    font-size: 4rem;
    line-height: 4rem;
  }

  .themes {
    min-height: 100vh;
  }

  .number-title {
    font-size: 2.8rem;
    line-height: 2.8rem;
  }
}
</style>