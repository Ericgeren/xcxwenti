<template>
  <div class="yinyue">
    <div class="audio">
      <audio :src="url" id="voice" preload loop ref="audioBiaoQian" />
      <span v-if="play" class="m-icon m-pause btn1 xuanzhuan" @click="playClick"></span>
      <span v-else class="m-icon m-play btn1 " @click="playClick"></span>
    </div>

  </div>
</template>
url(https://oss3.rabbitpre.com/rp2/apps/static/widget/music/music_off_8d94020.png) transparent no-repeat center center
<script>
import Config from '../../config'
export default {
  name: 'yinyue',
  data () {
    return {
      play:true,
      // url:Config.URL+'ntro.mp3'
      url:'http://xcxwtw.trcvc.com/ntro.mp3'
    }
  },
  mounted(){
    var voice = document.getElementById('voice');
    //调用 <audio> 元素提供的方法 play()
    voice.play();
    //判斷 WeixinJSBridge 是否存在
    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
        voice.play();
    } else {
        //監聽客户端抛出事件"WeixinJSBridgeReady"
        if (document.addEventListener) {
            document.addEventListener("WeixinJSBridgeReady", function(){
                voice.play();
            }, false);
        } else if (document.attachEvent) {
            document.attachEvent("WeixinJSBridgeReady", function(){
                voice.play();
            });
            document.attachEvent("onWeixinJSBridgeReady", function(){
                voice.play();
            });
        }
    }

    // this.$refs.playClick.click()
    // this.playBo();
  },
  methods:{
    playClick()
    {
       var play = !this.play;
       this.play = play;
       console.log(this.play);
       this.playBo();
    },
    playBo()
    {
      var playc = this.play;
      if(playc)
      {
        this.$refs.audioBiaoQian.play();
      }
      else
      {
        this.$refs.audioBiaoQian.pause();
      }
    }
  }
}
</script>

<style scoped>
.yinyue{
  position: absolute;
  right: 0.5rem;
  z-index: 200;
  top:0;
}


@font-face {font-family: "m-icon";
  src: url('//at.alicdn.com/t/font_1467430165_8826096.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/font_1467430165_8826096.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAABDcABAAAAAAGkAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABbAAAABoAAAAcc3dt+EdERUYAAAGIAAAAHQAAACAAPAAET1MvMgAAAagAAABNAAAAYFcvXHRjbWFwAAAB+AAAAE4AAAFKy6Yhr2N2dCAAAAJIAAAAGAAAACQM5f90ZnBnbQAAAmAAAAT8AAAJljD3npVnYXNwAAAHXAAAAAgAAAAIAAAAEGdseWYAAAdkAAAGpAAACXQ/YRvDaGVhZAAADggAAAAvAAAANgptDydoaGVhAAAOOAAAABwAAAAkB54DxmhtdHgAAA5UAAAAKAAAACgMdQKcbG9jYQAADnwAAAAgAAAAIA5wEJRtYXhwAAAOnAAAACAAAAAgATECDG5hbWUAAA68AAABMgAAAh8m/Wd3cG9zdAAAD/AAAABSAAAAmFBy1y9wcmVwAAAQRAAAAJUAAACVpbm+ZnicY2BgYGQAgjO2i86D6Mtznk6B0QBUCwhMAAB4nGNgZGBg4ANiCQYQYGJgBEI+IGYB8xgABOQAQQAAAHicY2Bh/sf4hYGVgYFpJtMZBgaGfgjN+JrBmJETKMrAxswAA4wCDAgQkOaawnCAoeIZF3PD/waGGGYHBgeQGpAcswRYiQIDIwDa5Q1LAAAAeJxjYGBgZoBgGQZGBhBwAfIYwXwWBg0gzQakGRmYGCqecf3/D+RXPGP4//9/txQLVD0QMLIxwDmMTECCiQEVMDLQDDDTzmiSAAAmuwk9AAB4nGNgQANGDEbMEv8fMjv8PwCjAURmCF94nJ1VaXfTRhSVvGRP2pLEUETbMROnNBqZsAUDLgQpsgvp4kBoJegiJzFd+AN87Gf9mqfQntOP/LTeO14SWnpO2xxL776ZO2/TexNxjKjseSCuUUdKXveksv5UKvGzpK7rXp4o6fWSumynnpIWUStNlczF/SO5RHUuVrJJsEnG616inqs874PSSzKsKEsi2iLayrwsTVNPHD9NtTi9ZJCmgZSMgp1Ko48QqlEvkaoOZUqHXr2eipsFUjYa8aijonoQKu4czzmljTpgpHKVw1yxWW3ke0nW8/qP0kSn2Nt+nGDDY/QjV4FUjMzA9jQeh08k09FeIjORf+y4TpSFUhtcAK9qsMegSvGhuPFBthPI1HjN8XVRqTQyFee6z7LZLB2PlRDlwd/YoZQbur+Ds9OmqFZjcfvAMwY5KZQoekgWgA5Tmaf2CNo8tEBmjfqj4hzwdQgvshBlKs+ULOhQBzJndveTYtrdSddkcaBfBjJvdveS3cfDRa+O9WW7vmAKZzF6khSLixHchzLrp0y71AhHGRdzwMU8XuLWtELIyAKMSiPMUVv4ntmoa5wdY290Ho/VU2TSRfzdTH49OKlY4TjLekfcSJy7x67rwlUgiwinGu8njizqUGWw+vvSkussOGGYZ8VCxZcXvncR+S8xbj+Qd0zhUr5rihLle6YoU54xRYVyGYWlXDHFFOWqKaYpa6aYoTxrilnKc0am/X/p+334Pocz5+Gb0oNvygvwTfkBfFN+CN+UH8E3pYJvyjp8U16Eb0pt4G0pUxGqmLF0+O0lWrWhajkzuMA+D2TNiPZFbwTSMEp11Ukpdb+lVf4k+euix2Prk5K6NWlsiLu6abP4+HTGb25dMuqGnatPjCPloT109dg0oVP7zeHfzl3dKi65q4hqw6g2IpgEgDbotwLxTfNsOxDzll18/EMwAtTPqTVUU3Xt1JUaD/K8q7sYnuTA44hjoI3rrq7ASxNTVkPz4WcpMhX7g7yplWrnsHX5ZFs1hzakwtsi9pVknKbtveRVSZWV96q0Xj6fhiF6ehbXhLZs3cmkEqFRM87x8K4qRdmRlnLUP0Lnl6K+B5xxdkHrwzHuRN1BtTXsdPj5ZiNrCyaGprS9E6BkLF0VY1HlWZxjdA1rHW/cEp6upycW8Sk2mY/CSnV9lI9uI80rdllm0ahKdXSX9lnsqzb9MjtoWB1nP2mqNu7qYVuNKlI9Vb4GtAd2Vt34UA8rPuqgUVU12+jayGM0LmvGfwzIYlz560arJtPv4JZqp81izV1Bc9+YLPdOL2+9yX4r56aRpv9Woy0jl/0cjvltEeDfOSh2U9ZAvTVpiHEB2QsYLtVE5w7N3cYg4jr7H53T/W/NwiA5q22N2Tz14erpKJI7THmcZZtZ1vUozVG0k8Q+RWKrw4nBTY3hWG7KBgbk7j+s38M94K4siw+8bSSAuM/axKie6uDuHlcjNOwruQ8YmWPHuQ2wA+ASxObYtSsdALvSJecOwGfkEDwgh+AhOQS75NwE+Jwcgi/IIfiSHIKvyLkF0COHYI8cgkfkEDwmpw2wTw7BE3IIviaH4BtyWgAJOQQpOQRPySF4ZmRzUuZvqch1oO8sugH0ve0aKFtQfjByZcLOqFh23yKyDywi9dDI1Qn1iIqlDiwi9blFpP5o5NqE+hMVS/3ZIlJ/sYjUF8aXmYGU13oveUcHfwIrvqx+AAEAAf//AA94nJ1WX2wjZxGf+b794/Wftdfr3U2cOInX5z/BOcfx38Sunc3lcqiXXhInkIsTlKroml77AHdCudCqD37hrqeiCtEi8cRJ6BBVVaFU0ENCBwr0DVUItQ9VxRNwCEElhEoFlcBrZhPgKA/VUfnz982uZ2ZnZn+/GQMDGwBL7BXgIMOkkwEAzoBfBIbIloExXBVIwkUAWRIFUuOaGM6XtaSWLWspGyN/evNN9kp/02Z7ZCvC1ODX/C4fAhOK0IB12MWD5UN9bcs5zxBCagjUPeAqqnwX0OfDz0VQ8fklZVfDoCRIwV0ICIEnw+gDKeiTtsAvi0wI+IVuFFU11IFQyK+eGVk+tMjj8sd49Cn+vf/T5RC5fOTBXAp7D+TTWfkfd7hH/lT0XfpkDrvdrpPb2Gg2SzOWtbG7sbuz1Vxvri8v1qszjVLDKlrFjjYzpOUMRzfzKOXRVlkCk9VKplopsDwaSdGImTGVpaRMHrNJmTSydoG10LKlmFku1SoZS5JVPoZNqVTLFjCbyWK10mZNLJkJxOGR+EY0PRrlX0P/UHbsK+559m00xlOqOq5OnHYfnkrYseHhCd13EIxGg6Fo9Ks+SQwITAir6cXOmnPKMhVREUXJvS2G48bd8Uk2jsHhbPyRycioEJoYiT72XMVqNNKWgtjroT4yoX53XotrtJ6Nm/opNRLyDcVDKU2P4cG9wJAeTGR+SxAGAb7Mn2XPgQTS9zkipacpqIkaHrln8S59bsLA/dD9EAYDFiH9L5L+7z+ibyhooEZVuuueJZuDAfrQN4BB/8+e/zcGP+Vf5/MQIH2Fkb5eqVloxmSUMtU3NJkdynJ/TdZ40a+I7qoQFdxVUfGDZ7s1+At/maugw9nXQwiIzvLhKKEtSCRD/wLpBMBDYMm75xk8efwDEoL8JAFeJpVHu90f2Nko1/IKSnYWC/ReauWSRV/TiPEvua+PDo+6d+IjT+8803302s7T+E13Px7H57NLn9q+fuXK9e2O57ox+CV/izdBoTwE8PLWRVlPi3o2zaSXcPb9M+49996Z93GWN91fTX7gvnP7Nk5+MAnAKAhHAHYEYRiHkjMdocgsLSwKDFTkjDvknvoGdIFxzi5Q8+Ad6iZ8yZ6ybSGaj1K8SQOTtoqEQquOshmTUskqJkttSibTu7KGDkL/6OKLmzOnt9kfd+aurrpHA2AO3SnhzK0rPYTNFy8u7E9t41Pbs7eu9gYn1xQaxfedwc/4Dm9TNS0YdYbptVLGF+hA6FBcCEuGYUQpknRMsjNVrVKj0uF/y4/Prs3Swr+enKnc3FyO/cjb++fuy96znoEWv86+Byk4Aw8751rI+AyCxJwMijhPAjAJqCWKDMRLICIT8RJ1TyZx1gUUBLxAOBA6IKCwZOaq5Wo1Iht5sKUEekU5CYlYR4wkkkqGRvRMlmotrIimVSyX6m2hbo3hPNYy05iRDFllssSvJoxwoH8nEA4HXggbRviF46DP5+b6rzKVBYVYo3muTjzWfO8qqLyrRFhq/QunOvgNQ33bM8JvBcLGmDE36X4+12jk3lZvqRicf2wuE2ZTfr94IJrC44Lin5ES5wpPUM0FeB4W+T77MWSgDA4swGecTp4mCDr17ASj5BfmG9zDBk2Rdht5i07Rx45hIuExTuggoMgegpYQWs1apTRdmBq2iFsiZDCjqHksG/WskbJVQS7KqkBcLZfavF6rF+ttLtZI8Phbo3qIKTsrS7LZRM+C/aR440Yx2arminFLsYbyydNDKyvZT5ceGhsRWTo0ZRfdQ1VIhj77xIpVz87ineLZdtDWu0+RHf595eaNbnhirDoxHhwbK5ja5aHxVvqUxIuRaTP6UFTKR9YuE7gS7yyET1ub2zdurpzgsDc44j2iA6PuknZs8CjsUMZtUm6Bd7ns9YVVQiQuajqLEKW1SdSSzHEdqh0MAHuuw3v/6B3P1MTgF/w3vHjMuzzUYRGV5cMANYtpPyGci8C7IAZQ8IlCN0QjRJF8SjeIEshMkrveEO/QQwPo9RiTzGY+Tptz6HhuqS99xHDkkzzPqTyYBf3FuPAvO4ZL3pzLNGYLU/YEA6c1u9hYrMxM1Qv1XHoib+cTcSPqlyHMwipBI3mfHESZjH6fPXTLNMTyvykUM/WUt5+Qqp48nnhJT+Yj/Z9v7O9vsNr6/n55q91/r7211WZGe6v/3h9UXVe97W//kTbdVU/E12jnxf0Nt7B+7do6vrWx3z/wDPE1b1+MjcRoub/TR3VaPzw5AP4JIfuDbXicY2BkYGAA4h2qbx/G89t8ZZBnYQCBy3OeTkXQ/w+wMDA7ALkcDEwgUQBqFgxSAHicY2BkYGB2+H+AIYaFAQSAJCMDKmAFAEaLAm4BdgAiAAAAAAFVAAAD6QAsBAAABABvAMMAWAA6AAAApQB6AIsAgAAdAAAAKAAoACgBZAF8AZQBsgH4AhYCZgKcAyADqgPSBLoAAQAAAA8AXwAFAAAAAAACACYANABsAAAAigF3AAAAAHicbZA9b8JADIbfQIhaCXXrXDfqAMNFl1MoX1sH+AfdESIQCYiUHB9zx6pz1a1/tS+XE+pAItuPfW9sXwB08Y0AlydAhAfPLYR48tzGMzaeQ2p+PHcwC5TnCFHwQWUQ3rPSdV9duIU7PHpu4w0vnkNqPj138IVfzxG6gcUOCgWWKLEHdqpYlozXQpPOXGJdrLDGCgKDBJpxQvvfo6kYVoY0Q02KV7Yo93ZWVuuVmETLRJpJBKOGyuiUkpubvHNYhZoHTfPUj53SLN8cCxwYS/62wi0p6OFITYIxMvSZK2zpR44q+oHroDB3i2qfnV33zPGJPuZ57LLc+ZrLrKq64NYprzAVa/PFwZabYm+ld9TJOOuL2spIVCUDLWouRjOcJc1EnSSex6JyUfXtm/4BIF1NyQAAeJxtxUsOQDAARdH36lO/xFbaohgaWIUVmJhZgYUj8oZucnNg8HVfCPirfScMNhomTJkxp2XBkhVrNvY89jU6J70MspO9HGSUo5zkLJcHfS4atAAAS7gAyFJYsQEBjlm5CAAIAGMgsAEjRCCwAyNwsA5FICBLuAAOUUuwBlNaWLA0G7AoWWBmIIpVWLACJWGwAUVjI2KwAiNEswoJBQQrswoLBQQrsw4PBQQrWbIEKAlFUkSzCg0GBCuxBgFEsSQBiFFYsECIWLEGA0SxJgGIUVi4BACIWLEGAURZWVlZuAH/hbAEjbEFAEQAAAA=') format('woff'), /* chrome,firefox */
    url('//at.alicdn.com/t/font_1467430165_8826096.ttf') format('truetype'), /* chrome,firefox,opera,Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/font_1467430165_8826096.svg#m-icon') format('svg'); /* iOS 4.1- */
  src: url('//at.alicdn.com/t/font_1467430165_8826096.eot')\0; /* ie8 fix */

}

.audio .btn1 {
    display: inline-block;
    width: 38px;
    height: 38px;
    border-radius: 19px;
    /* background: rgb(233, 59, 61); */
    color: #fff;
    font-size: 20px;
    text-align: center;
    line-height: 38px;
}
.audio .m-icon {
  background: url(../../assets/yinyue.png) no-repeat;
  background-size: cover;
    /* font-family: "m-icon" !important; */
    /* font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale; */
}

@keyframes rotate{
  0%{
  transform: rotate(0);
  }
  10%{
  transform:rotate(200deg);
  }
  20%{
  transform:rotate(400deg);
  }
  30%{
  transform:rotate(600deg);
  }
  40%{
  transform:rotate(800deg);
  }
  50%{
   transform: rotate(1000deg);
  }
  60%{
  transform:rotate(1200deg);
  }
  70%{
  transform:rotate(1400deg);
  }
  80%{
  transform:rotate(1500deg);
  }
  90%{
  transform:rotate(1800deg);
  }
  100%{
   transform: rotate(2000deg);
  }
}

.xuanzhuan{
  animation: rotate 20s linear infinite;  /*开始动画后无限循环，用来控制rotate*/
}
/* .audio .m-play:before {
    content: "\e602";
}
.audio .m-pause:before {
    content: "\e606";
} */

</style>
