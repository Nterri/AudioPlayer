<template>
<div class="container">
  <div class="block-playlist">
    <button class="block-playlist__button" @click="playlistMenu">Playlist</button>
    <div class="block-container"
         @click="playlistMenu"
         :class="{
      'open': playlist
         }"
    >
      <div class="block-content"
           @click.stop
           :class="{
           'open': playlist
           }"
      >
        <div class="block-content__title">PlayList</div>
        <div class="block-content__list">
          <div class="block-content-sound"
               @click="play(sound)"
               v-for="sound in audioMass"
          >
            <div class="block-content-sound__image">
              <img :src="sound.image" alt="image">
            </div>
            <div class="block-content-sound__text">{{ sound.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="block-audio">
    <audio-player :audio="audio" :image="image" :name="name" />
  </div>
</div>
</template>

<script>
import AudioPlayer from "@/components/AudioPlayer"
import audio1 from '@/sounds/sound.mp3'
import image1 from '@/images/image1.jpg'
import audio2 from '@/sounds/sound2.mp3'
import image2 from '@/images/image2.jpg'
import audio3 from '@/sounds/sound3.mp3'
import image3 from '@/images/image3.webp'
import audio4 from '@/sounds/sound4.mp3'
import image4 from '@/images/image4.webp'
import audio5 from '@/sounds/sound5.mp3'
import image5 from '@/images/image5.jpg'
import audio6 from '@/sounds/sound6.mp3'
import image6 from '@/images/image6.webp'
import audio7 from '@/sounds/sound7.mp3'
import image7 from '@/images/image7.webp'
import audio8 from '@/sounds/sound8.mp3'
import image8 from '@/images/image8.webp'
export default {
  components: {AudioPlayer},
  data() {
    return {
      audio: audio1,
      image: image1,
      name: 'Три дня дождя - Отпускай',
      audioMass: [],
      playlist: false
    }
  },
  methods: {
    play(sound) {
      this.audio = sound.audio
      this.image = sound.image
      this.name = sound.name
      this.playlist = !this.playlist
    },
    playlistMenu() {
      this.playlist = !this.playlist
    }
  },
  mounted() {
    this.audioMass.push({
      image: image1,
      audio: audio1,
      name: 'Три дня дождя - Отпускай'
    })
    this.audioMass.push({
      image: image2,
      audio: audio2,
      name: 'Егор Крид - Цвет настроения черный'
    })
    this.audioMass.push({
      image: image3,
      audio: audio3,
      name: 'Султан Лагучев - Люблю И Ненавижу'
    })
    this.audioMass.push({
      image: image4,
      audio: audio4,
      name: 'Люся Чеботина - Солнце Монако'
    })
    this.audioMass.push({
      image: image5,
      audio: audio5,
      name: 'Morgenshtern - Номер'
    })
    this.audioMass.push({
      image: image6,
      audio: audio6,
      name: 'Shadowraze - Showdown'
    })
    this.audioMass.push({
      image: image7,
      audio: audio7,
      name: 'Jony - Никак'
    })
    this.audioMass.push({
      image: image8,
      audio: audio8,
      name: 'Джарахов - Просто Друг (feat. Стас Костюшкин)'
    })
    console.clear()
  }
}
</script>

<style lang="scss" scoped>
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
h1 {
  text-align: center;
  font-weight: 600;
  @include adaptiv-value('margin-bottom', 25, 10, 1);
  @include adaptiv-value('font-size', 24, 16, 3);
}
.block-audio {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}
.block-playlist__button {
  background: transparent;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 0 0 0 auto;
  display: block;
  @include adaptiv-value('font-size', 20, 14, 3);
  text-transform: uppercase;
  @include adaptiv-value('margin-bottom', 15, 10, 1);
}
.block-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 100;
  transition: all 0.3s;
  left: 0;
  visibility: hidden;
  opacity: 0;
  background: rgba(0, 0, 0, 0.6);
  &.open {
    opacity: 1;
    visibility: visible;
  }
  .block-content {
    z-index: 100;
    background: white;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    @include adaptiv-value('width', 400, 280, 1);
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: all 0.3s;
    transform: translate(100%, 0);
    padding: 10px;
    &.open {
      transform: translate(0, 0);
    }
  }
}
.block-content-sound {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  .block-content-sound__image {
    width: 50px;
    height: 50px;
    min-width: 50px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 100%;
    }
  }
  .block-content-sound__text {}
}
.block-content__title {
  text-align: center;
  font-weight: 600;
  @include adaptiv-value('font-size', 20, 16, 3);
}
.block-content__list {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow-y: auto;
}
</style>