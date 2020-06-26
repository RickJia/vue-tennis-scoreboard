<template>
<div class="content">
  <div class="game-group"> 
    <span class="score">
      15
    </span>
    <div>
      <button>Ace</button>
      <button>Winner</button>
      <button>Fault</button>
      <button>Unforced Error</button>
    </div>
  </div>

  <div class="game-group"> 
    <span class="score">
      15
    </span>
    <div>
      <button>Ace</button>
      <button>Winner</button>
      <button>Fault</button>
      <button>Unforced Error</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'GameBoard',

  data: function() {
    return {
      statistics: [



        
      ]


    }
  }


}
</script>

<style scoped lang="stylus">
  .content
    display flex
    justify-content center

  .score
    font-size 100px
  
  .game-group:nth-child(1)
    margin-right 15px
 
</style>