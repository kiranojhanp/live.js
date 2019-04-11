<template>
<div class="controls">
   <knob-control
  :min="-12"
  :max="12"
  :stroke-width="8"
  v-model="semitone"
></knob-control> 
</div>
</template>
<script>
export default {
    
}
</script>
<style>
.controls {
    display:inline-block;
}
</style>
