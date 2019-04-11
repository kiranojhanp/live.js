<template>
  <div class="container">
    <div class="nav">
      <div class="title">
        <h1>Live.js</h1>
      </div>
      <div class="transport">
        <img
          v-if="!playing"
          class="transport-button"
          src="../assets/icons/play.png"
          v-on:click="playStop"
        >
        <img
          v-if="playing"
          class="transport-button"
          src="../assets/icons/stop.png"
          v-on:click="playStop"
        >
        <img
          v-if="recording"
          class="transport-button"
          src="../assets/icons/recording.png"
          v-on:click="recordClicked"
        >
        <img
          v-if="!recording && recorder != null"
          class="transport-button"
          src="../assets/icons/circle.png"
          v-on:click="recordClicked"
        >
        <img class="transport-button" src="../assets/icons/delete.png" v-on:click="deleteClicked">
             <img class="transport-button" src="../assets/icons/help.png" v-on:click="helpClicked">
        <!-- <img src="../assets/icons/minus.png" class="transport-button">
        <img src="../assets/icons/plus.png" class="transport-button">-->

        <knob-control
          class="vol-knob"
          :min="40"
          :max="300"
          :size="40"
          :stroke-width="12"
          v-model="bpm"
          primary-color="#67D0F7"
        ></knob-control>
      </div>
    </div>

    <div class="step-grid">
      <div
        v-on:click="selectTrack(1)"
        class="drum-title"
        v-bind:class="{ trackActive: oneActive }"
      >1</div>
      <div class="step-button" v-on:click="randomButtonClicked('kick')">
        <img class="track-button" src="../assets/icons/random.png">
      </div>
      <div class="step-button" v-on:click="clearTrack(1)">
        <img class="track-button" src="../assets/icons/delete.png">
      </div>
      <div class="step kick" v-bind:class="{ oneActive: seq1[0] }" v-on:click="toggleKick(0)"></div>
      <div class="step kick" v-bind:class="{ oneActive: seq1[1] }" v-on:click="toggleKick(1)"></div>
      <div class="step kick" v-bind:class="{ oneActive: seq1[2] }" v-on:click="toggleKick(2)"></div>
      <div class="step kick" v-bind:class="{ oneActive: seq1[3] }" v-on:click="toggleKick(3)"></div>
      <div class="step kick" v-bind:class="{ oneActive: seq1[4] }" v-on:click="toggleKick(4)"></div>
      <div class="step kick" v-bind:class="{ oneActive: seq1[5] }" v-on:click="toggleKick(5)"></div>
      <div class="step kick" v-bind:class="{ oneActive: seq1[6] }" v-on:click="toggleKick(6)"></div>
      <div class="step kick" v-bind:class="{ oneActive: seq1[7] }" v-on:click="toggleKick(7)"></div>
      <div class="step kick" v-bind:class="{ oneActive: seq1[8] }" v-on:click="toggleKick(8)"></div>
      <div class="step kick" v-bind:class="{ oneActive: seq1[9] }" v-on:click="toggleKick(9)"></div>
      <div class="step kick" v-bind:class="{ oneActive: seq1[10] }" v-on:click="toggleKick(10)"></div>
      <div class="step kick" v-bind:class="{ oneActive: seq1[11] }" v-on:click="toggleKick(11)"></div>
      <div class="step kick" v-bind:class="{ oneActive: seq1[12] }" v-on:click="toggleKick(12)"></div>
      <div class="step kick" v-bind:class="{ oneActive: seq1[13] }" v-on:click="toggleKick(13)"></div>
      <div class="step kick" v-bind:class="{ oneActive: seq1[14] }" v-on:click="toggleKick(14)"></div>
      <div class="step kick" v-bind:class="{ oneActive: seq1[15]}" v-on:click="toggleKick(15)"></div>
            <knob-control
        class="vol-knob"
        :min="0"
        :max="100"
        :size="35"
        :stroke-width="12"
        v-model="volume1"
        primary-color="crimson"
      ></knob-control>
      <knob-control
        class="vol-knob"
        :min="0"
        :max="100"
        :size="35"
        :stroke-width="12"
        v-model="reverbWet1"
        primary-color="magenta"
      ></knob-control>
      <knob-control
        class="vol-knob"
        :min="0"
        :max="100"
        :size="35"
        :stroke-width="12"
        v-model="chorusWet1"
        primary-color="pink"
      ></knob-control>
    </div>

    <div class="step-grid">
      <div
        v-on:click="selectTrack(2)"
        v-bind:class="{ trackActive: twoActive }"
        class="drum-title"
      >2</div>
      <div class="step-button" v-on:click="randomButtonClicked('clap')">
        <img class="track-button" src="../assets/icons/random.png">
      </div>
      <div class="step-button" v-on:click="clearTrack(2)">
        <img class="track-button" src="../assets/icons/delete.png">
      </div>
      <div class="step clap" v-bind:class="{ twoActive: seq2[0] }" v-on:click="toggleClap(0)"></div>
      <div class="step clap" v-bind:class="{ twoActive: seq2[1] }" v-on:click="toggleClap(1)"></div>
      <div class="step clap" v-bind:class="{ twoActive: seq2[2] }" v-on:click="toggleClap(2)"></div>
      <div class="step clap" v-bind:class="{ twoActive: seq2[3] }" v-on:click="toggleClap(3)"></div>
      <div class="step clap" v-bind:class="{ twoActive: seq2[4] }" v-on:click="toggleClap(4)"></div>
      <div class="step clap" v-bind:class="{ twoActive: seq2[5] }" v-on:click="toggleClap(5)"></div>
      <div class="step clap" v-bind:class="{ twoActive: seq2[6] }" v-on:click="toggleClap(6)"></div>
      <div class="step clap" v-bind:class="{ twoActive: seq2[7] }" v-on:click="toggleClap(7)"></div>
      <div class="step clap" v-bind:class="{ twoActive: seq2[8] }" v-on:click="toggleClap(8)"></div>
      <div class="step clap" v-bind:class="{ twoActive: seq2[9] }" v-on:click="toggleClap(9)"></div>
      <div class="step clap" v-bind:class="{ twoActive: seq2[10] }" v-on:click="toggleClap(10)"></div>
      <div class="step clap" v-bind:class="{ twoActive: seq2[11] }" v-on:click="toggleClap(11)"></div>
      <div class="step clap" v-bind:class="{ twoActive: seq2[12] }" v-on:click="toggleClap(12)"></div>
      <div class="step clap" v-bind:class="{ twoActive: seq2[13] }" v-on:click="toggleClap(13)"></div>
      <div class="step clap" v-bind:class="{ twoActive: seq2[14] }" v-on:click="toggleClap(14)"></div>
      <div class="step clap" v-bind:class="{ twoActive: seq2[15]}" v-on:click="toggleClap(15)"></div>
      <knob-control
        class="vol-knob"
        :min="0"
        :max="100"
        :size="35"
        :stroke-width="12"
        v-model="volume2"
        primary-color="crimson"
        step-size="1"
      ></knob-control>
        <knob-control
        class="vol-knob"
        :min="0"
        :max="100"
        :size="35"
        :stroke-width="12"
        v-model="reverbWet2"
        primary-color="magenta"
        step-size="1"
      ></knob-control>
      <knob-control
        class="vol-knob"
        :min="0"
        :max="100"
        :size="35"
        :stroke-width="12"
        v-model="chorusWet2"
        primary-color="pink"
      ></knob-control>
    </div>

    <div class="step-grid">
      <div
        v-on:click="selectTrack(3)"
        v-bind:class="{ trackActive: threeActive }"
        class="drum-title"
      >3</div>
      <div class="step-button" v-on:click="randomButtonClicked('ch')">
        <img class="track-button" src="../assets/icons/random.png">
      </div>
      <div class="step-button" v-on:click="clearTrack(3)">
        <img class="track-button" src="../assets/icons/delete.png">
      </div>
      <div class="step ch" v-bind:class="{ threeActive: seq3[0] }" v-on:click="toggleCh(0)"></div>
      <div class="step ch" v-bind:class="{ threeActive: seq3[1] }" v-on:click="toggleCh(1)"></div>
      <div class="step ch" v-bind:class="{ threeActive: seq3[2] }" v-on:click="toggleCh(2)"></div>
      <div class="step ch" v-bind:class="{ threeActive: seq3[3] }" v-on:click="toggleCh(3)"></div>
      <div class="step ch" v-bind:class="{ threeActive: seq3[4] }" v-on:click="toggleCh(4)"></div>
      <div class="step ch" v-bind:class="{ threeActive: seq3[5] }" v-on:click="toggleCh(5)"></div>
      <div class="step ch" v-bind:class="{ threeActive: seq3[6] }" v-on:click="toggleCh(6)"></div>
      <div class="step ch" v-bind:class="{ threeActive: seq3[7] }" v-on:click="toggleCh(7)"></div>
      <div class="step ch" v-bind:class="{ threeActive: seq3[8] }" v-on:click="toggleCh(8)"></div>
      <div class="step ch" v-bind:class="{ threeActive: seq3[9] }" v-on:click="toggleCh(9)"></div>
      <div class="step ch" v-bind:class="{ threeActive: seq3[10] }" v-on:click="toggleCh(10)"></div>
      <div class="step ch" v-bind:class="{ threeActive: seq3[11] }" v-on:click="toggleCh(11)"></div>
      <div class="step ch" v-bind:class="{ threeActive: seq3[12] }" v-on:click="toggleCh(12)"></div>
      <div class="step ch" v-bind:class="{ threeActive: seq3[13] }" v-on:click="toggleCh(13)"></div>
      <div class="step ch" v-bind:class="{ threeActive: seq3[14] }" v-on:click="toggleCh(14)"></div>
      <div class="step ch" v-bind:class="{ threeActive: seq3[15]}" v-on:click="toggleCh(15)"></div>
          <knob-control
        class="vol-knob"
        :min="0"
        :max="100"
        :size="35"
        :stroke-width="12"
        v-model="volume3"
        primary-color="crimson"
        step-size="1"
      ></knob-control>
      <knob-control
        class="vol-knob"
        :min="0"
        :max="100"
        :size="35"
        :stroke-width="12"
        v-model="reverbWet3"
        primary-color="magenta"
        step-size="1"
      ></knob-control>
      <knob-control
        class="vol-knob"
        :min="0"
        :max="100"
        :size="35"
        :stroke-width="12"
        v-model="chorusWet3"
        primary-color="pink"
      ></knob-control>
    </div>
    <div class="step-grid">
      <div
        v-on:click="selectTrack(4)"
        v-bind:class="{ trackActive: fourActive }"
        class="drum-title"
      >4</div>
      <div class="step-button" v-on:click="randomButtonClicked('sn1')">
        <img class="track-button" src="../assets/icons/random.png">
      </div>
      <div class="step-button" v-on:click="clearTrack(4)">
        <img class="track-button" src="../assets/icons/delete.png">
      </div>
      <div class="step sn1" v-bind:class="{ fourActive: seq4[0] }" v-on:click="toggleSn1(0)"></div>
      <div class="step sn1" v-bind:class="{ fourActive: seq4[1] }" v-on:click="toggleSn1(1)"></div>
      <div class="step sn1" v-bind:class="{ fourActive: seq4[2] }" v-on:click="toggleSn1(2)"></div>
      <div class="step sn1" v-bind:class="{ fourActive: seq4[3] }" v-on:click="toggleSn1(3)"></div>
      <div class="step sn1" v-bind:class="{ fourActive: seq4[4] }" v-on:click="toggleSn1(4)"></div>
      <div class="step sn1" v-bind:class="{ fourActive: seq4[5] }" v-on:click="toggleSn1(5)"></div>
      <div class="step sn1" v-bind:class="{ fourActive: seq4[6] }" v-on:click="toggleSn1(6)"></div>
      <div class="step sn1" v-bind:class="{ fourActive: seq4[7] }" v-on:click="toggleSn1(7)"></div>
      <div class="step sn1" v-bind:class="{ fourActive: seq4[8] }" v-on:click="toggleSn1(8)"></div>
      <div class="step sn1" v-bind:class="{ fourActive: seq4[9] }" v-on:click="toggleSn1(9)"></div>
      <div class="step sn1" v-bind:class="{ fourActive: seq4[10] }" v-on:click="toggleSn1(10)"></div>
      <div class="step sn1" v-bind:class="{ fourActive: seq4[11] }" v-on:click="toggleSn1(11)"></div>
      <div class="step sn1" v-bind:class="{ fourActive: seq4[12] }" v-on:click="toggleSn1(12)"></div>
      <div class="step sn1" v-bind:class="{ fourActive: seq4[13] }" v-on:click="toggleSn1(13)"></div>
      <div class="step sn1" v-bind:class="{ fourActive: seq4[14] }" v-on:click="toggleSn1(14)"></div>
      <div class="step sn1" v-bind:class="{ fourActive: seq4[15]}" v-on:click="toggleSn1(15)"></div>
           <knob-control
        class="vol-knob"
        :min="0"
        :max="100"
        :size="35"
        :stroke-width="12"
        v-model="volume4"
        primary-color="crimson"
        step-size="1"
      ></knob-control>
      <knob-control
        class="vol-knob"
        :min="0"
        :max="100"
        :size="35"
        :stroke-width="12"
        v-model="reverbWet4"
        primary-color="magenta"
        step-size="1"
      ></knob-control>
      <knob-control
        class="vol-knob"
        :min="0"
        :max="100"
        :size="35"
        :stroke-width="12"
        v-model="chorusWet4"
        primary-color="pink"
      ></knob-control>
    </div>
    <div class="step-grid indicator-grid">
      <div class="indicator-spacer"></div>
      <div id="step0" class="vis-step indicator" v-bind:class="{ stepPlaying: indicatorSeq[0] }"></div>
      <div id="step1" class="vis-step indicator" v-bind:class="{ stepPlaying: indicatorSeq[1] }"></div>
      <div id="step2" class="vis-step indicator" v-bind:class="{ stepPlaying: indicatorSeq[2] }"></div>
      <div id="step3" class="vis-step indicator" v-bind:class="{ stepPlaying: indicatorSeq[3] }"></div>
      <div id="step4" class="vis-step indicator" v-bind:class="{ stepPlaying: indicatorSeq[4] }"></div>
      <div id="step5" class="vis-step indicator" v-bind:class="{ stepPlaying: indicatorSeq[5] }"></div>
      <div id="step6" class="vis-step indicator" v-bind:class="{ stepPlaying: indicatorSeq[6] }"></div>
      <div id="step7" class="vis-step indicator" v-bind:class="{ stepPlaying: indicatorSeq[7] }"></div>
      <div id="step8" class="vis-step indicator" v-bind:class="{ stepPlaying: indicatorSeq[8] }"></div>
      <div id="step9" class="vis-step indicator" v-bind:class="{ stepPlaying: indicatorSeq[9] }"></div>
      <div id="step10" class="vis-step indicator" v-bind:class="{ stepPlaying: indicatorSeq[10] }"></div>
      <div id="step11" class="vis-step indicator" v-bind:class="{ stepPlaying: indicatorSeq[11] }"></div>
      <div id="step12" class="vis-step indicator" v-bind:class="{ stepPlaying: indicatorSeq[12] }"></div>
      <div id="step13" class="vis-step indicator" v-bind:class="{ stepPlaying: indicatorSeq[13] }"></div>
      <div id="step14" class="vis-step indicator" v-bind:class="{ stepPlaying: indicatorSeq[14] }"></div>
      <div id="step15" class="vis-step indicator" v-bind:class="{ stepPlaying: indicatorSeq[15] }"></div>
      <div class="indicator-spacer2"></div>
    </div>

    <div v-if="recorder != null" class="audio">
      <audio controls></audio>
    </div>

  <modal name="help-modal" width="100%" height="90%" >
    <div id="help-pic">
  <img src="../assets/help.png">
    </div>
</modal>

  </div>


</template>

<script>
import Tone from "tone";
import StartAudioContext from "startaudiocontext";

export default {
  name: "home",
  created() {
    //need to start audio context this way due to new browser restrictions
    StartAudioContext(Tone.context, "#button").then(function() {
      console.log("audio context started");
    });

    Tone.context.latencyHint = "interactive";

    const audioContext = Tone.context;
    const destination = audioContext.createMediaStreamDestination();

    this.reverb1 = new Tone.Freeverb().receive("reverb").toMaster();
    this.reverb1.connect(destination);
    this.reverb1.dampening.value = 1000;

    this.chorus1 = new Tone.Chorus()
			.receive("chorus")
			.toMaster();
    this.chorus1.connect(destination)

    this.drum1 = new Tone.MembraneSynth().toMaster();
    this.drum1.connect(destination);

    this.drum2 = new Tone.NoiseSynth().toMaster();
    this.drum2.connect(destination);
    this.drum2.set("noise.type", "white");
    this.drum2.set("envelope.decay", ".4");
    this.drum2.set("envelope.attack", "0.005");
    this.drum2.set("envelope.sustain", "0");

    this.drum3 = new Tone.NoiseSynth().toMaster();
    this.drum3.connect(destination);
    this.drum3.set("noise.type", "white");
    this.drum3.set("envelope.decay", "1");
    this.drum3.set("envelope.attack", "0.005");
    this.drum3.set("envelope.sustain", "0");

    this.drum4 = new Tone.NoiseSynth().toMaster();
    this.drum4.connect(destination);

    this.drum4.set("noise.type", "pink");
    this.drum4.set("envelope.decay", ".39");
    this.drum4.set("envelope.attack", "0.001");
    this.drum4.set("envelope.sustain", "0");

    this.reverbSend1 = this.drum1.send("reverb", -Infinity);
    this.reverbSend2 = this.drum2.send("reverb", -Infinity);
    this.reverbSend3 = this.drum3.send("reverb", -Infinity);
    this.reverbSend4 = this.drum4.send("reverb", -Infinity);

    this.chorusSend1 = this.drum1.send("chorus", -Infinity);
        this.chorusSend2 = this.drum2.send("chorus", -Infinity);
    
        this.chorusSend3 = this.drum3.send("chorus", -Infinity);
        this.chorusSend4 = this.drum4.send("chorus", -Infinity);
    

    if (window.MediaRecorder != undefined) {
      this.recorder = new MediaRecorder(destination.stream);

      this.recorder.ondataavailable = e => this.chunks.push(e.data);
      this.recorder.onstop = e => {
        let blob = new Blob(this.chunks, { type: "audio/ogg; codecs=opus" });
        const audio = document.querySelector("audio");
        audio.src = URL.createObjectURL(blob);
        console.log(blob);
      };
    }
    // Tie play/stop button to space bar
    window.addEventListener("keydown", e => {
      if (e.code == "Space") {
        this.playStop();
      }
    });

    //sequencer index init
    this.index = 0;
    this.recording = false;
    let self = this;

    var loop = new Tone.Loop(function(time) {
      Tone.Draw.schedule(function() {
        //the callback synced to the animation frame at the given time
        const noteElement = document.querySelector("#step" + self.index);
        noteElement.classList.add("step-playing");
        setTimeout(() => {
          noteElement.classList.remove("step-playing");
        }, 100);
      }, time);

      if (self.seq3[self.index] == true) {
        self.drum3.triggerAttackRelease("16n");
      }

      if (self.seq2[self.index] == true) {
        self.drum2.triggerAttackRelease("16n");
      }

      if (self.seq4[self.index] == true) {
        self.drum4.triggerAttackRelease("16n");
      }

      if (self.seq1[self.index] == true) {
        self.drum1.triggerAttackRelease("C1", "16n");
      }

      // move index up one every note
      if (self.index < 15) {
        self.index++;
      } else {
        self.index = 0;
      }
    }, "16n").start(0);
  },
  methods: {
    helpClicked() {
          this.$modal.show('help-modal');
    },
    selectTrack(track) {
      console.log(track);
      if (track == this.selectedTrack) {
        this.selectedTrack = null;
        this.oneActive = false;
        this.twoActive = false;
        this.threeActive = false;
        this.fourActive = false;
      } else {
        if (track == 1) {
          this.selectedTrack = 1;
          this.oneActive = true;
          this.twoActive = false;
          this.threeActive = false;
          this.fourActive = false;
        }
        if (track == 2) {
          this.selectedTrack = 2;

          this.oneActive = false;
          this.twoActive = true;
          this.threeActive = false;
          this.fourActive = false;
        }
        if (track == 3) {
          this.selectedTrack = 3;

          this.oneActive = false;
          this.twoActive = false;
          this.threeActive = true;
          this.fourActive = false;
        }
        if (track == 4) {
          this.selectedTrack = 4;

          this.oneActive = false;
          this.twoActive = false;
          this.threeActive = false;
          this.fourActive = true;
        }
      }
    },
    clearTrack(track) {
      if (track == 1) {
        for (let i = 0; i < 15; i++) {
          this.seq1[i] = false;
        }
      }
      if (track == 2) {
        for (let i = 0; i < 15; i++) {
          this.seq2[i] = false;
        }
      }
      if (track == 3) {
        for (let i = 0; i < 15; i++) {
          this.seq3[i] = false;
        }
      }
      if (track == 4) {
        for (let i = 0; i < 15; i++) {
          this.seq4[i] = false;
        }
      }
    },
    deleteClicked() {
      for (var i = 1; i <= 4; i++) {
        this.clearTrack(i);
      }
    },
    randomButtonClicked(track) {
      if (track == "kick") {
        for (let i = 0; i < 15; i++) {
          this.seq1[i] = Math.random() < 0.5;
        }
      }

      if (track == "clap") {
        for (let i = 0; i < 15; i++) {
          this.seq2[i] = Math.random() < 0.5;
        }
      }

      if (track == "ch") {
        for (let i = 0; i < 15; i++) {
          this.seq3[i] = Math.random() < 0.5;
        }
      }

      if (track == "sn1") {
        for (let i = 0; i < 15; i++) {
          this.seq4[i] = Math.random() < 0.5;
        }
      }
    },
    recordClicked() {
      console.log("record button clicked");

      if (this.recording == false) {
        this.playing = true;
        this.recording = true;
        this.recorder.start();
        Tone.Transport.start("+0.1");
      } else {
        this.recording = false;
        this.playing = false;
        Tone.Transport.stop();
        this.recorder.stop();
        this.index = 0;
      }
    },
    toggleKick(number) {
      console.log(this.seq1[number]);
      if (this.seq1[number] == false) {
        this.seq1[number] = true;
      } else if (this.seq1[number] == true) {
        this.seq1[number] = false;
      }
    },
    toggleClap(number) {
      console.log(this.seq2[number]);
      if (this.seq2[number] == false) {
        this.seq2[number] = true;
      } else if (this.seq2[number] == true) {
        this.seq2[number] = false;
      }
    },
    toggleOh(number) {
      console.log(this.seq3[number]);
      if (this.seq3[number] == false) {
        this.seq3[number] = true;
      } else if (this.seq3[number] == true) {
        this.seq3[number] = false;
      }
    },
    toggleCh(number) {
      console.log(this.seq3[number]);
      if (this.seq3[number] == false) {
        this.seq3[number] = true;
      } else if (this.seq3[number] == true) {
        this.seq3[number] = false;
      }
    },
    toggleSn1(number) {
      console.log(this.seq4[number]);
      if (this.seq4[number] == false) {
        this.seq4[number] = true;
      } else if (this.seq4[number] == true) {
        this.seq4[number] = false;
      }
    },
    toggleSn2(number) {
      console.log(this.seq4[number]);
      if (this.sn2Seq[number] == false) {
        this.sn2Seq[number] = true;
      } else if (this.sn2Seq[number] == true) {
        this.sn2Seq[number] = false;
      }
    },
    playStop() {
      if (this.playing == false) {
        this.index = 0;
        Tone.Transport.start("+0.1");
        this.playing = true;
      } else {
        if (this.recording == true) {
          this.index = 0;
          this.playing = false;
          this.recording = false;
          this.recorder.stop();
          Tone.Transport.stop();
        } else {
          this.index = 0;
          this.playing = false;
          this.recording = false;
          Tone.Transport.stop();
        }
      }
    }
  },
  data() {
    return {
      volume1: 100,
      volume2: 100,
      volume3: 100,
      volume4: 100,
      reverbSend1: null,
      reverbSend2: null,
      reverbSend3: null,
      reverbSend4: null,
      chorusSend1: null,
      chorusSend2: null,
      chorusSend3: null,
      chorusSend4: null,
      reverbWet1: 0,
      reverbWet2: 0,
      reverbWet3: 0,
      reverbWet4: 0,
      chorusWet1: 0,
      chorusWet2: 0,
      chorusWet3: 0,
      chorusWet4: 0,
      drum1: null,
      drum2: null,
      drum3: null,
      drum4: null,
      editingTrack: true,
      selectedTrack: null,
      oneActive: false,
      twoActive: false,
      threeActive: false,
      fourActive: false,
      reverb1: null,
      chorus1: null,
      chunks: [],
      recorder: null,
      bpm: 120,
      index: 0,
      playing: false,
      recording: false,
      seq1: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false
      },
      seq2: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false
      },
      seq3: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false
      },
      seq4: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false
      },
      seq5: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false
      },
      seq6: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false
      },
      seq7: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false
      },
      seq8: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false
      },
      indicatorSeq: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false
      }
    };
  },
  watch: {
    bpm: function(val) {
      Tone.Transport.bpm.value = val;
      console.log(Tone.Transport.bpm.value);
    },
    reverbWet1: function(val) {
      this.reverbSend1.gain.value = val - 100;
    },
    reverbWet2: function(val) {
      this.reverbSend2.gain.value = val - 100;
    },
    reverbWet3: function(val) {
      this.reverbSend3.gain.value = val - 100;
    },
    reverbWet4: function(val) {
      this.reverbSend4.gain.value = val - 100;
    },
    chorusWet1: function(val) {
      this.chorusSend1.gain.value = val - 100;
    },
    chorusWet2: function(val) {
      this.chorusSend2.gain.value = val - 100;
    },
    chorusWet3: function(val) {
      this.chorusSend3.gain.value = val - 100;
    },
    chorusWet4: function(val) {
      this.chorusSend4.gain.value = val - 100;
    },
      volume1: function(val) {
      this.drum1.volume.value = val - 100;
    },
    volume2: function(val) {
      this.drum2.volume.value = val - 100;
    },
    volume3: function(val) {
      this.drum3.volume.value = val - 100;
    },
    volume4: function(val) {
      this.drum4.volume.value = val - 100;
    }
  }
};
</script>

<style>
#help-pic {
  text-align:center;
  width:100%;
  height:auto;
  margin: 0 auto;
}

.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;
}

.trackActive {
  background-color: red !important;
}

.indicator-spacer {
  width: 70px;
}

.indicator-spacer2 {
  width: 80px;
}

.track-count {
  display: inline-block;
}

.recording-active {
  background-color: red;
}

.track-button {
  height: 20px;
  margin-right: 9px;
  opacity: 1;
  transition: 0 "1" s ease-in-out;
}

.track-button:hover {
  opacity: 0.7;
}

.transport {
  display: inline-block;
}

.numberActive {
  background-color: #59e27a !important;
}

.oneActive {
  background-color: #f9f378 !important;
}

.twoActive {
  background-color: #fa7000 !important;
}

.ohActive {
  background-color: #feef14 !important;
}

.threeActive {
  background-color: #8bfd5e !important;
}

.fourActive {
  background-color: #27fda3 !important;
}

.sn2Active {
  background-color: #00a5f1 !important;
}

.vol-knob {
  padding-left: 10px;
}

nav {
  display: flex;
}

.transport-button {
  width: 20px;
  padding: 5px;
  opacity: 1;
  transition: 0 "1" s ease-in-out;
}

.transport-button:hover {
  opacity: 0.7;
}

.drum-title {
  margin-right: 10px;
  width: 30px;
  border: 1px solid black;
  background-color: #fcb23d;
  font-weight: bold;
}

.step {
  margin: 5px;
  height: 20px;
  width: 20px;
  background-color: #636363;
}

.vis-step {
  margin: 5px;
  height: 20px;
  width: 20px;
  background-color: red;
  border-radius: 50%;
  opacity: 0;
  /* transition: opacity 0"1"s; */
}

.vis-step.step-playing {
  margin: 5px;
  height: 20px;
  width: 20px;
  background-color: red;
  border-radius: 50%;
  opacity: 1;
}

.step-button {
  margin: 5px;
  height: 20px;
  width: 20px;
}

.step-grid {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
}

body {
  background-color: #b5b2b1;
}
</style>
