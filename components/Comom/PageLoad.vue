<template>
  <div class="loader load-data">
    <div class="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      default: '500px',
      type: String
    }
  }
}
</script>
<style>
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.lds-ellipsis div {
  position: absolute;
  top: 27px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: grey !important;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}

.lds-ellipsis div:nth-child(1) {
  left: 6px;
  animation: lds-ellipsis1 0.6s infinite;
}

.lds-ellipsis div:nth-child(2) {
  left: 6px;
  animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(3) {
  left: 26px;
  animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(4) {
  left: 45px;
  animation: lds-ellipsis3 0.6s infinite;
}

@keyframes lds-ellipsis1 {
  0% {
      transform: scale(0);
  }

  100% {
      transform: scale(1);
  }
}

@keyframes lds-ellipsis3 {
  0% {
      transform: scale(1);
  }

  100% {
      transform: scale(0);
  }
}

@keyframes lds-ellipsis2 {
  0% {
      transform: translate(0, 0);
  }

  100% {
      transform: translate(19px, 0);
  }
}

.load-data {
  background: none repeat scroll 0 0 rgba(255,255,255,.4);
  bottom: 0;
  height: 100%;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 9999;
}
</style>
