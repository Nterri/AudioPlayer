<template>
  <div class="name">{{ name }}</div>
  <div class="image">
    <div class="image-block">
      <img :src="image" alt="image">
    </div>
  </div>
  <div class="block stop-select">
    <div class="block-track">
      <div class="block-audio" @click="playStopMusic">
        <div class="block-audio__play" v-show="isSound"></div>
        <div class="block-audio__stop" v-show="!isSound"><span></span><span></span></div>
      </div>
      <input
          class="styled-slider slider-progress"
          type="range"
          min="0"
          max="100"
          step="0.01"
          v-model.number="value"
          @mousemove="blockTrackAllow"
          @mouseout="blockTrackCancel"
          @change="trackClick"
      >
      <div class="block-track__time">{{ time }}</div>
      <div class="sound">
        <div class="sound-button"
             @mousemove="showSoundMenuAllow"
             @mouseleave="showSoundMenuCancel"
        >
          <img :src="srcSound" alt="sound" v-show="this.volume">
          <img :src="srcNoSound" alt="no-sound" v-show="!this.volume">
        </div>
        <div class="sound-menu" :class="{
          'open': soundPanel
        }"
             @mousemove="showSoundMenuAllow"
             @mouseleave="showSoundMenuCancel"
        >
          <slider-custom
              @change="soundClick"
              :orientation="'vertical'"
              :trackColor="'#a4a4a4'"
              :color="'#575757'"
              :value="valueSound"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="loading-block" :class="{
    'open': loading
  }">
    <div class="loading-block__text">
      <div class="loader">Loading...</div>
    </div>
  </div>
</template>

<script>
import imageSound from '/src/images/sound.png'
import imageNoSound from '/src/images/no-sound.png'
import SliderCustom from "@/components/Slider";
export default {
  name: 'audio-player',
  components: {SliderCustom},
  data() {
    return {
      sound: 0,
      isSound: true,
      soundPanel: false,
      allowSet: true,
      valueSound: 50,
      volume: 0.5,
      value: 0,
      srcSound: imageSound,
      srcNoSound: imageNoSound,
      maxValue: 0,
      time: '00:00 - 00:00',
      currentAudio: 0,
      loading: false
    }
  },
  props: {
    audio: {
      required: true
    },
    image: {},
    name: {}
  },
  watch: {
    audio() {
      this.reset()
    }
  },
  methods: {
    showSoundMenuAllow() {
      this.soundPanel = true
    },
    showSoundMenuCancel() {
      this.soundPanel = false
    },
    blockTrackAllow() {
      this.allowSet = false
    },
    blockTrackCancel() {
      this.allowSet = true
    },
    soundClick(number) {
      this.sound.volume = number / 100
      this.volume = number / 100
    },
    trackClick() {
      this.sound.currentTime = this.value
    },
    playStopMusic() {
      if (this.sound.paused) {
        this.sound.play()
        this.isSound = false
      }
      else {
        this.sound.pause()
        this.isSound = true
      }
    },
    formatTime(time) {
      let hours = Math.floor(time / 60 / 60);
      let minutes = Math.floor(time / 60) - (hours * 60);
      let seconds = Math.floor(time % 60);
      let formatted = '00:00:00'
      if (hours > 0) {
        formatted = [
          hours.toString().padStart(2, '0'),
          minutes.toString().padStart(2, '0'),
          seconds.toString().padStart(2, '0')
        ].join(':');
      } else {
        formatted = [
          minutes.toString().padStart(2, '0'),
          seconds.toString().padStart(2, '0')
        ].join(':');
      }
      return formatted
    },
    reset() {
      this.loading = true
      this.currentAudio = this.audio
      this.sound.pause()
      this.isSound = true
      this.sound = null
      this.sound = new Audio(this.audio)
      this.maxValue = 0
      this.sound.addEventListener('timeupdate', this.update)
      this.sound.addEventListener('loadeddata', (e) => {
        this.sound.volume = this.volume
        this.update(e)
        this.loading = false
        this.sound.play()
        this.isSound = false
      })
      this.sound.addEventListener('ended', this.end)
    },
    update(e) {
      let {currentTime, duration} = e.srcElement;
      this.maxValue = duration
      let audioTag = document.querySelector('.slider-progress')
      if (audioTag && this.maxValue.toString() != audioTag.getAttribute('max')) {
        audioTag.setAttribute('max', this.maxValue)
      }
      let time = document.querySelector('.block-track__time')
      if (time) {
        this.time = `${this.formatTime(currentTime)} - ${this.formatTime(duration)}`
        if (this.allowSet)
          this.value = currentTime
      }
      for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
        e.style.setProperty('--value', e.value);
        e.style.setProperty('--min', e.min === '' ? '0' : e.min);
        e.style.setProperty('--max', this.maxValue);
        e.addEventListener('input', () => e.style.setProperty('--value', e.value));
      }
    },
    end(e) {
      let time = document.querySelector('.block-track__time')
      let { currentTime, duration } = e.srcElement;
      if (time) {
        this.sound.currentTime = 0
        this.time = `00:00 - ${this.formatTime(duration)}`
        this.isSound = true
      }
      this.value = 0
    }
  },
  mounted() {
    for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
      e.style.setProperty('--value', 0);
      e.style.setProperty('--min', 0);
      e.style.setProperty('--max', 100);
    }
    this.loading = true
    this.currentAudio = this.audio
    this.sound = new Audio(this.audio)
    this.sound.addEventListener('timeupdate', this.update)
    this.sound.addEventListener('loadeddata', (e) => {
      this.sound.volume = this.volume
      this.loading = false
      this.update(e)
      for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
        e.style.setProperty('--value', e.value);
        e.style.setProperty('--min', e.min === '' ? '0' : e.min);
        e.style.setProperty('--max', this.maxValue);
        e.addEventListener('input', () => e.style.setProperty('--value', e.value));
      }
    })
    this.sound.addEventListener('ended', this.end)
    document.addEventListener('keydown', (e) => {
      if (e.keyCode == 32) {
        this.playStopMusic()
      }
    })
    console.clear()
  }
}
</script>

<style scoped lang="scss">
@mixin adaptiv-value($property, $startSize, $minSize, $type) {
  $addSize: $startSize - $minSize;
  @if $type==1 {
    #{$property}: $startSize + px;
    @media (max-width: #{1200 + px}) {
      #{$property}: calc(#{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{1200 - 320}));
    }
  }
  @if $type==2 {
    #{$property}: $startSize + px;
    @media (min-width: #{1200 + px}) {
      #{$property}: calc(#{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{1200 - 320}));
    }
  }
  @if $type==3 {
    #{$property}: calc(#{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{1200 - 320}));
  }
}
.stop-select {
  * {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
}
.name {
  text-align: center;
  font-weight: 600;
  @include adaptiv-value('font-size', 24, 16, 3);
}
.image {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  .image-block {
    width: 400px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 100%;
    }
  }
}
.loading-block {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  z-index: 200;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  opacity: 0;
  &.open {
    visibility: visible;
    opacity: 1;
  }
  .loading-block__text {
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loader {
    color: #fff;
    font-size: 90px;
    text-indent: -9999em;
    overflow: hidden;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    margin: 72px auto;
    position: relative;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
    animation: load6 1.7s infinite ease, round 1.7s infinite ease;
  }
  @-webkit-keyframes load6 {
    0% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    10%,
    59% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
    }
    20% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
    }
    38% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
    }
    100% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
  }
  @keyframes load6 {
    0% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    10%,
    59% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
    }
    20% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
    }
    38% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
    }
    100% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
  }
  @-webkit-keyframes round {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes round {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

}
input[type=range].styled-slider {
  height: 6px;
  width: 100%;
  -webkit-appearance: none;
  border-radius: 2px;
  * {
    transition: all 0.3s;
  }
  &:hover {
    &::-webkit-slider-thumb {
        transform: scale(1.35);
    }
  }
}
input[type=range].styled-slider.slider-progress {
  --range: calc(var(--max) - var(--min));
  --ratio: calc((var(--value) - var(--min)) / var(--range));
  --sx: calc(0.5 * 6px + var(--ratio) * (100% - 6px));
}
input[type=range].styled-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #575757;
  border: none;
  transition: all 0.3s;
  cursor: pointer;
  transform: translate(-1px, 0);
  &:hover {
    transform: scale(1.35);
  }
}
input[type=range].styled-slider::-webkit-slider-runnable-track {
  height: 6px;
  border-radius: 2px;
  background: #a4a4a4;
  cursor: pointer;
  box-shadow: none;
}
input[type=range].styled-slider.slider-progress::-webkit-slider-runnable-track {
  background: linear-gradient(#575757,#575757) 0/var(--sx) 100% no-repeat, #a4a4a4;
}
input[type=range].styled-slider::-moz-range-thumb {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #575757;
  border: none;
}
input[type=range].styled-slider::-moz-range-track {
  height: max(6px,0px);
  border-radius: 2px;
  background: #a4a4a4;
  box-shadow: none;
}
input[type=range].styled-slider.slider-progress::-moz-range-track {
  background: linear-gradient(#575757,#575757) 0/var(--sx) 100% no-repeat, #a4a4a4;
}
input[type=range].styled-slider::-ms-fill-upper {
  background: transparent;
  border-color: transparent;
}
input[type=range].styled-slider::-ms-fill-lower {
  background: transparent;
  border-color: transparent;
}
input[type=range].styled-slider::-ms-thumb {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #575757;
  border: none;
  box-sizing: border-box;
}
input[type=range].styled-slider::-ms-track {
  height: 1em;
  border-radius: 2px;
  background: #a4a4a4;
  box-shadow: none;
  box-sizing: border-box;
}
input[type=range].styled-slider.slider-progress::-ms-fill-lower {
  height: max(6px,0px);
  border-radius: 0.5em 0 0 0.5em;
  margin: -1px 0 -1px -1px;
  background: #575757;
}
.block {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  .block-audio {
    cursor: pointer;
    .block-audio__play {
      width: 0;
      height: 0;
      border-top: 11px solid transparent;
      border-left: 22px solid #575757;
      border-bottom: 11px solid transparent;
    }
    .block-audio__stop {
      display: flex;
      align-items: center;
      gap: 4px;
      span {
        display: block;
        width: 9px;
        height: 22px;
        background: #575757;
      }
    }
  }
  .block-track {
    background: #d5d5d5;
    padding: 10px;
    border-radius: 10px;
    flex: 1 1 auto;
    display: flex;
    gap: 10px;
    align-items: center;
    .block-track__time {
      white-space: nowrap;
      flex: 0 0 auto;
      @include adaptiv-value('width', 120, 90, 3);
      @include adaptiv-value('font-size', 18, 14, 3);
      text-align: center;
    }
    .block-track-line {
      cursor: pointer;
      height: 6px;
      border-radius: 6px;
      width: 100%;
      z-index: 1;
      background: #a4a4a4;
      position: relative;
      .block-track-line__current {
        pointer-events: none;
        width: 0;
        transition: all 0.3s;
        height: 100%;
        z-index: 1;
        background: #575757;
        border-radius: 5px;
        position: relative;
      }
    }
  }
}
.sound {
  position: relative;
  z-index: 2;
  .sound-button {
    height: 22px;
    width: 22px;
    cursor: pointer;
    img {
      max-width: 100%;
    }

    position: relative;
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      background: transparent;
      position: absolute;
      left: 0;
      bottom: 100%;
    }
  }
  .sound-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    position: absolute;
    background: #d5d5d5;
    width: 30px;
    border-radius: 6px;
    height: 0px;
    left: 50%;
    z-index: 2;
    visibility: hidden;
    transition: all 0.3s;
    opacity: 0;
    bottom: 100%;
    transform: translate(-50%, -12%);
    &::before {
      content: '';
      z-index: -1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 130%;
      height: 130%;
      background: transparent;
    }
    &.open {
      visibility: visible;
      opacity: 1;
      height: 100px;
    }
  }
}
</style>