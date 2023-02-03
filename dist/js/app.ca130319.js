(function(){"use strict";var e={778:function(e,t,o){var n=o(9242),a=o(3396);const i={class:"content"};function s(e,t,o,n,s,u){const l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(l)])}var u={},l=o(89);const d=(0,l.Z)(u,[["render",s]]);var r=d,c=o(7139);const m=e=>((0,a.dD)("data-v-27d924b4"),e=e(),(0,a.Cn)(),e),p={class:"container"},A={class:"block-playlist"},h=m((()=>(0,a._)("div",{class:"block-content__title"},"PlayList",-1))),v={class:"block-content__list"},f=["onClick"],g={class:"block-content-sound__image"},b=["src"],y={class:"block-content-sound__text"},k={class:"block-audio"};function P(e,t,o,i,s,u){const l=(0,a.up)("audio-player");return(0,a.wg)(),(0,a.iD)("div",p,[(0,a._)("div",A,[(0,a._)("button",{class:"block-playlist__button",onClick:t[0]||(t[0]=(...e)=>u.playlistMenu&&u.playlistMenu(...e))},"Playlist"),(0,a._)("div",{class:(0,c.C_)(["block-container",{open:s.playlist}]),onClick:t[2]||(t[2]=(...e)=>u.playlistMenu&&u.playlistMenu(...e))},[(0,a._)("div",{class:(0,c.C_)(["block-content",{open:s.playlist}]),onClick:t[1]||(t[1]=(0,n.iM)((()=>{}),["stop"]))},[h,(0,a._)("div",v,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.audioMass,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"block-content-sound",onClick:t=>u.play(e)},[(0,a._)("div",g,[(0,a._)("img",{src:e.image,alt:"image"},null,8,b)]),(0,a._)("div",y,(0,c.zw)(e.name),1)],8,f)))),256))])],2)],2)]),(0,a._)("div",k,[(0,a.Wm)(l,{audio:s.audio,image:s.image,name:s.name},null,8,["audio","image","name"])])])}const w=e=>((0,a.dD)("data-v-65fcab26"),e=e(),(0,a.Cn)(),e),T={class:"name"},S={class:"image"},C={class:"image-block"},L=["src"],z={class:"block stop-select"},V={class:"block-track"},x={class:"block-audio__play"},q={class:"block-audio__stop"},j=w((()=>(0,a._)("span",null,null,-1))),J=w((()=>(0,a._)("span",null,null,-1))),Z=[j,J],E={class:"block-track__time"},M={class:"sound"},X=["src"],I=["src"],Q=w((()=>(0,a._)("div",{class:"loading-block__text"},[(0,a._)("div",{class:"loader"},"Loading...")],-1))),U=[Q];function R(e,t,o,i,s,u){const l=(0,a.up)("slider-custom");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",T,(0,c.zw)(o.name),1),(0,a._)("div",S,[(0,a._)("div",C,[(0,a._)("img",{src:o.image,alt:"image"},null,8,L)])]),(0,a._)("div",z,[(0,a._)("div",V,[(0,a._)("div",{class:"block-audio",onClick:t[0]||(t[0]=(...e)=>u.playStopMusic&&u.playStopMusic(...e))},[(0,a.wy)((0,a._)("div",x,null,512),[[n.F8,s.isSound]]),(0,a.wy)((0,a._)("div",q,Z,512),[[n.F8,!s.isSound]])]),(0,a.wy)((0,a._)("input",{class:"styled-slider slider-progress",type:"range",min:"0",max:"100",step:"0.01","onUpdate:modelValue":t[1]||(t[1]=e=>s.value=e),onMousemove:t[2]||(t[2]=(...e)=>u.blockTrackAllow&&u.blockTrackAllow(...e)),onMouseout:t[3]||(t[3]=(...e)=>u.blockTrackCancel&&u.blockTrackCancel(...e)),onChange:t[4]||(t[4]=(...e)=>u.trackClick&&u.trackClick(...e))},null,544),[[n.nr,s.value,void 0,{number:!0}]]),(0,a._)("div",E,(0,c.zw)(s.time),1),(0,a._)("div",M,[(0,a._)("div",{class:"sound-button",onMousemove:t[5]||(t[5]=(...e)=>u.showSoundMenuAllow&&u.showSoundMenuAllow(...e)),onMouseleave:t[6]||(t[6]=(...e)=>u.showSoundMenuCancel&&u.showSoundMenuCancel(...e))},[(0,a.wy)((0,a._)("img",{src:s.srcSound,alt:"sound"},null,8,X),[[n.F8,this.volume]]),(0,a.wy)((0,a._)("img",{src:s.srcNoSound,alt:"no-sound"},null,8,I),[[n.F8,!this.volume]])],32),(0,a._)("div",{class:(0,c.C_)(["sound-menu",{open:s.soundPanel}]),onMousemove:t[7]||(t[7]=(...e)=>u.showSoundMenuAllow&&u.showSoundMenuAllow(...e)),onMouseleave:t[8]||(t[8]=(...e)=>u.showSoundMenuCancel&&u.showSoundMenuCancel(...e))},[(0,a.Wm)(l,{onChange:u.soundClick,orientation:"vertical",trackColor:"#a4a4a4",color:"#575757",value:s.valueSound},null,8,["onChange","value"])],34)])])]),(0,a._)("div",{class:(0,c.C_)(["loading-block",{open:s.loading}])},U,2)],64)}var Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAGs0lEQVRoge2ZbYxcVRnHf8+5+1Jj260U8INIfElg01apb5CgqZWk4BApbeTeudO1ZqNQNFUJrWJICQ4mbcSqiSQaHcQozXbunVNoXV6aFGJCicqbBgHbLRghwJfSomtLts505zx+mLs43pmtOzt305r0n2zm2Xn+55znf8/c5zznHDiLs5gTyFz1m8/nb1bVm0VkPlB2zm221p6Yo/HoybpD3/f7jDExsEbk7ef0VWPMP4Fbsx5vCibLzhIRFWBNG/d1WY6VRmZCEhG7gGunoXygk/7CMHxfJ/xMhORyuX5jzH3ANVmMFYbhRlV9OQiCfYVCYXAmbboWksvl+hcuXLgL+Fy3fU1BVZ9S1TdEZJVz7rl8Pn97sVg8ZaxdCfF9v2/BggUVMhQBEMfx07Va7WJVvYtGZr3j4MGDD65bt+5d07WZdfpNZuJ+4OoOAux4vCAIVgBWRM4H/uycu8Ja+/c0b1YzMhsRs0WlUtnf29v7MeB54BLP8/YODQ0tTPM6XkcSEbuBXAZxAm9nvIeBIyJySxRFrzX7R0ZGXi8UCqucc4+p6qWTk5P3AmsBneJ0NCPDw8PzshYBUK1W+0VkORCq6l/CMMynOeVy+bCIrAKOAtfm8/mNzf4ZCxkeHp43MTGRuQiA0dHR4/V6/aPAA8ACVS0HQdBSBURR9JqqfonGTGz3ff/9U74ZCcnlcv0TExO7ReSzWQWfhrX21TiOVwO3ACoi2/L5/NfSvEql8gDwK2Ce53nfnfpefN9/hzHmTuALwH+lNxHxoyjaFQTBdhH5ZrfBzjRrBUFwg4j8HHAisiKKot83+4eGhi6YnJx8Eeh3zi231j5vjDHfB76eFgHQ29u7PxH0+W5FdIJKpXK3qv4Q8FT13lwu19/sHxkZeR0oAUZEboRG1lo3XYc7duw4kpgd1T3/C+vXr39nrVa7FXjROWfblfequkVEcsDSgYGBG4G7UpRfADcZY0Lf9zcZ4JxTjDmV3jLdt1Sr1UuBLcCvjTFjYRiuTHOstbWEg3PuW+kSJY7jF4A/qerinp6eKzIt42eKJUuWPKaqXwbGgAtVdV8QBFeleXEcjwJ/E5ELDh061CIW2AdQr9cvPy1CisWiq1Qqv3TOLaPxW+8VkR1r165dnKKqqkYAzrmWKkJEnko+LzstQqZgra3HcfwV4HfAeX19fRvTHM/zHk/MT6R99Xr92cQcPK1CEqiqbkvslp2lMeaFxPxgm7ZTyeicM0EI/f39zyTmRWlfrVZ7MzFbkpK19i2gCsw/I4RkgTNCSLVa/XhiHkr7PM87NzFb9iC+788H+oG3zgQhIiJbEmNP2qmqyxLfX9u0PS/5fDPzc61O4Pu+Z4z5GXA5cKRer/8kzVHVT4kIzrmn0z7P85arKsDYaRFSLBbN2NjY9aq6CbgYqBljhuI4Tv98RERCAGPMQ+l+nHOXJYeAT54WIQcOHPh0Ut0CvCIiXyyXy4+nefl8fjWN87BXBwcH96f9InIlgDHmDz00XqLp6i2hUW8pGdZbqvqEiGxV1bHjx4/bvXv3VtMc3/f7gK3Jv9uLxaJL+T8EfAQ4Ojk5+dseYIRGGd+CQqGwuFwuHwVepsOTwlMhqXZvOxXHGLMNWAq8dOzYsbvTfhG5PjHL1tqacc59Ozk/aklvzrlPJmalu9A7QxAENwCbgEkRWZ+esTAM3ysiGwBHo1ajJ3k6NyV/beGc+46ILBGR1XMXfgNBEGwWkTtpvOgboyh6Ms1R1TuAecCOpJyf2YJora2pqg/8Jsugm+H7/nvy+fweEfkBjfdxcxRFpTQvDMPVwDDwLxG5fer7GS+I1tqacy5gDsQk68kfaZzkj4vIdXEc/6gN70JVvYf/CH1lytfRyt4kpmUF7gbW2jrwKLBTRJZGUbQ7zSkUCu82xjwCnKuqu+M4/mmzf1YptflWqpN2szn7hcbLraoPA8uAJ06cOHHl6Ojo8WbOrGota21tYGAgUNWWJ5c1wjBc6Zx7hoaIZz3PuzotArqofkul0slFixblgfu7iHNarFmzZlEQBD9W1UdE5HxVfaharX5m586d/2jH76r6LZVKJwcGBkIyFhMEwYq+vr5DIvINGmvFbZVK5Zo9e/aMT9em6zJ+LsSIyMrkPmSfc+7DcRxvpenkvR0y2Y80ibnvFLQZ37EfPnx4m+d5F8VxfJW1tmWz1Q6ZHrxt2LChd3x8fKeItLuKfi6O40uyHK8Zme4QkwSwTkRaajMRuSfLsdLIfKtbKpVODg4OFmhcD7ykqm8A32u3+zuLs/g/wL8Be+uLqhHJlRUAAAAASUVORK5CYII=",H="data:image/png;base64,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";function W(e,t,o,n,i,s){const u=(0,a.up)("vue3-slider");return(0,a.wg)(),(0,a.j4)(u,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=e=>o.value=e)},null,8,["modelValue"])}var B=o(1716),N=o.n(B),O={name:"slider-custom",components:{"vue3-slider":N()},props:{value:{required:!0}}};const G=(0,l.Z)(O,[["render",W]]);var K=G,D={name:"audio-player",components:{SliderCustom:K},data(){return{sound:0,isSound:!0,soundPanel:!1,allowSet:!0,valueSound:50,volume:.5,value:0,srcSound:Y,srcNoSound:H,maxValue:0,time:"00:00 - 00:00",currentAudio:0,loading:!1}},props:{audio:{required:!0},image:{},name:{}},watch:{audio(){this.reset()}},methods:{showSoundMenuAllow(){this.soundPanel=!0},showSoundMenuCancel(){this.soundPanel=!1},blockTrackAllow(){this.allowSet=!1},blockTrackCancel(){this.allowSet=!0},soundClick(e){this.sound.volume=e/100,this.volume=e/100},trackClick(){this.sound.currentTime=this.value},playStopMusic(){this.sound.paused?(this.sound.play(),this.isSound=!1):(this.sound.pause(),this.isSound=!0)},formatTime(e){let t=Math.floor(e/60/60),o=Math.floor(e/60)-60*t,n=Math.floor(e%60),a="00:00:00";return a=t>0?[t.toString().padStart(2,"0"),o.toString().padStart(2,"0"),n.toString().padStart(2,"0")].join(":"):[o.toString().padStart(2,"0"),n.toString().padStart(2,"0")].join(":"),a},reset(){this.loading=!0,this.currentAudio=this.audio,this.sound.pause(),this.isSound=!0,this.sound=null,this.sound=new Audio(this.audio),this.maxValue=0,this.sound.addEventListener("timeupdate",this.update),this.sound.addEventListener("loadeddata",(e=>{this.sound.volume=this.volume,this.update(e),this.loading=!1,this.sound.play(),this.isSound=!1})),this.sound.addEventListener("ended",this.end)},update(e){let{currentTime:t,duration:o}=e.srcElement;this.maxValue=o;let n=document.querySelector(".slider-progress");n&&this.maxValue.toString()!=n.getAttribute("max")&&n.setAttribute("max",this.maxValue);let a=document.querySelector(".block-track__time");a&&(this.time=`${this.formatTime(t)} - ${this.formatTime(o)}`,this.allowSet&&(this.value=t));for(let i of document.querySelectorAll('input[type="range"].slider-progress'))i.style.setProperty("--value",i.value),i.style.setProperty("--min",""===i.min?"0":i.min),i.style.setProperty("--max",this.maxValue),i.addEventListener("input",(()=>i.style.setProperty("--value",i.value)))},end(e){let t=document.querySelector(".block-track__time"),{currentTime:o,duration:n}=e.srcElement;t&&(this.sound.currentTime=0,this.time=`00:00 - ${this.formatTime(n)}`,this.isSound=!0),this.value=0}},mounted(){for(let e of document.querySelectorAll('input[type="range"].slider-progress'))e.style.setProperty("--value",0),e.style.setProperty("--min",0),e.style.setProperty("--max",100);this.loading=!0,this.currentAudio=this.audio,this.sound=new Audio(this.audio),this.sound.addEventListener("timeupdate",this.update),this.sound.addEventListener("loadeddata",(e=>{this.sound.volume=this.volume,this.loading=!1,this.update(e);for(let t of document.querySelectorAll('input[type="range"].slider-progress'))t.style.setProperty("--value",t.value),t.style.setProperty("--min",""===t.min?"0":t.min),t.style.setProperty("--max",this.maxValue),t.addEventListener("input",(()=>t.style.setProperty("--value",t.value)))})),this.sound.addEventListener("ended",this.end),document.addEventListener("keydown",(e=>{32==e.keyCode&&this.playStopMusic()})),console.clear()}};const F=(0,l.Z)(D,[["render",R],["__scopeId","data-v-65fcab26"]]);var _=F,$=o.p+"/TicTacToe/dist/media/sound.824189a7.mp3",ee=o.p+"img/image1.ddb58cfe.jpg",te=o.p+"/TicTacToe/dist/media/sound2.22e38267.mp3",oe=o.p+"img/image2.3709030d.jpg",ne=o.p+"/TicTacToe/dist/media/sound3.58c6463a.mp3",ae=o.p+"img/image3.425bfe93.webp",ie=o.p+"/TicTacToe/dist/media/sound4.9dc23f33.mp3",se="data:image/webp;base64,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",ue=o.p+"/TicTacToe/dist/media/sound5.3ad26fb1.mp3",le=o.p+"img/image5.4f25b66d.jpg",de=o.p+"/TicTacToe/dist/media/sound6.a5f526c3.mp3",re=o.p+"img/image6.24b9b6a4.webp",ce=o.p+"/TicTacToe/dist/media/sound7.5e765130.mp3",me=o.p+"img/image7.f84f1163.webp",pe=o.p+"/TicTacToe/dist/media/sound8.1c4dd457.mp3",Ae=o.p+"img/image8.750692f1.webp",he={components:{AudioPlayer:_},data(){return{audio:$,image:ee,name:"Три дня дождя - Отпускай",audioMass:[],playlist:!1}},methods:{play(e){this.audio=e.audio,this.image=e.image,this.name=e.name,this.playlist=!this.playlist},playlistMenu(){this.playlist=!this.playlist}},mounted(){this.audioMass.push({image:ee,audio:$,name:"Три дня дождя - Отпускай"}),this.audioMass.push({image:oe,audio:te,name:"Егор Крид - Цвет настроения черный"}),this.audioMass.push({image:ae,audio:ne,name:"Султан Лагучев - Люблю И Ненавижу"}),this.audioMass.push({image:se,audio:ie,name:"Люся Чеботина - Солнце Монако"}),this.audioMass.push({image:le,audio:ue,name:"Morgenshtern - Номер"}),this.audioMass.push({image:re,audio:de,name:"Shadowraze - Showdown"}),this.audioMass.push({image:me,audio:ce,name:"Jony - Никак"}),this.audioMass.push({image:Ae,audio:pe,name:"Джарахов - Просто Друг (feat. Стас Костюшкин)"}),console.clear()}};const ve=(0,l.Z)(he,[["render",P],["__scopeId","data-v-27d924b4"]]);var fe=ve,ge=o(2483);const be=[{path:"/AudioPlayer/dist/",component:fe},{path:"/AudioPlayer/dist/:pathMatch(.*)*",component:fe}],ye=(0,ge.p7)({routes:be,history:(0,ge.PO)("/")});var ke=ye;const Pe=(0,n.ri)(r);Pe.use(ke).mount("#app")}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,i){if(!n){var s=1/0;for(r=0;r<e.length;r++){n=e[r][0],a=e[r][1],i=e[r][2];for(var u=!0,l=0;l<n.length;l++)(!1&i||s>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(u=!1,i<s&&(s=i));if(u){e.splice(r--,1);var d=a();void 0!==d&&(t=d)}}return t}i=i||0;for(var r=e.length;r>0&&e[r-1][2]>i;r--)e[r]=e[r-1];e[r]=[n,a,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,i,s=n[0],u=n[1],l=n[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(a in u)o.o(u,a)&&(o.m[a]=u[a]);if(l)var r=l(o)}for(t&&t(n);d<s.length;d++)i=s[d],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(r)},n=self["webpackChunkvue_projects_new"]=self["webpackChunkvue_projects_new"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(778)}));n=o.O(n)})();
//# sourceMappingURL=app.ca130319.js.map
