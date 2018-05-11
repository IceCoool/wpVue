<template>
  <div class="hello">
      <p>hello webpack</p>
      <span>
          hello sass
      </span>
      <br>
      <img src="~images/picture.png" alt="">
  </div>
</template>
<script>
    export default {
        data () {
            return {

            }
        }
    }
</script>
<style lang="scss">
.hello {
  color: red;
  span {
    background-color: pink;
    cursor: pointer;
    font-size: 18px;
  }
  img{
      width: 100px;
  }
}
</style>

