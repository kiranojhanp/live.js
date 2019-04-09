<template>
    <div class="step-grid">
      <div class="drum-title">1</div>
      <div class="step-button" v-on:click="randomButtonClicked('kick')">
        <img class="random-button" src="../assets/icons/random.png">
      </div>
      <div class="step" v-bind:class="{ active: seq[0] }" v-on:click="toggle(0)"></div>
      <div class="step" v-bind:class="{ active: seq[1] }" v-on:click="toggle(1)"></div>
      <div class="step" v-bind:class="{ active: seq[2] }" v-on:click="toggle(2)"></div>
      <div class="step" v-bind:class="{ active: seq[3] }" v-on:click="toggle(3)"></div>
      <div class="step" v-bind:class="{ active: seq[4] }" v-on:click="toggle(4)"></div>
      <div class="step" v-bind:class="{ active: seq[5] }" v-on:click="toggle(5)"></div>
      <div class="step" v-bind:class="{ active: seq[6] }" v-on:click="toggle(6)"></div>
      <div class="step" v-bind:class="{ active: seq[7] }" v-on:click="toggle(7)"></div>
      <div class="step" v-bind:class="{ active: seq[8] }" v-on:click="toggle(8)"></div>
      <div class="step" v-bind:class="{ active: seq[9] }" v-on:click="toggle(9)"></div>
      <div class="step" v-bind:class="{ active: seq[10] }" v-on:click="toggle(10)"></div>
      <div class="step" v-bind:class="{ active: seq[11] }" v-on:click="toggle(11)"></div>
      <div class="step" v-bind:class="{ active: seq[12] }" v-on:click="toggle(12)"></div>
      <div class="step" v-bind:class="{ active: seq[13] }" v-on:click="toggle(13)"></div>
      <div class="step" v-bind:class="{ active: seq[14] }" v-on:click="toggle(14)"></div>
      <div class="step" v-bind:class="{ active: seq[15]}" v-on:click="toggle(15)"></div>
      <knob-control
        class="vol-knob"
        :min="0"
        :max="100"
        :size="40"
        :stroke-width="12"
        v-model="kickVol"
        primary-color="#67D0F7"
      ></knob-control>
    </div>
</template>
<script>
export default {
    name: "stepgrid",
    created() {

    },
    methods: {

    },
    data() {
        return {
            
        }
    },
    props: {
        color: String,
        number: Number
    }

}
</script>
<style>
.step {
  margin: 5px;
  height: 20px;
  width: 20px;
  background-color: #636363;
}



</style>
