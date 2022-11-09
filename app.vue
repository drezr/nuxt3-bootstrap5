<template>
  <div style="margin: 200px">
    <!-- Tooltip -->

    <button
      type="button"
      class="btn btn-secondary m-2"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      data-bs-title="This top tooltip is themed via CSS variables."
      ref="tooltipRef"
    >
      Custom tooltip
    </button>

    <!-- Popover -->

    <button
      type="button"
      class="btn btn-danger m-2"
      data-bs-toggle="popover"
      data-bs-title="Popover title"
      data-bs-content="And here's some amazing content. It's very engaging. Right?"
      ref="popoverRef"
    >
      Click to toggle popover
    </button>

    <!-- Toast -->

    <button
      type="button"
      class="btn btn-primary m-2"
      id="liveToastBtn"
      @click="showToast()"
    >
      Show live toast
    </button>

    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div
        id="liveToast"
        class="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        ref="toastRef"
      >
        <div class="toast-header">
          <strong class="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">Hello, world! This is a toast message.</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const tooltipRef = ref(null)
const popoverRef = ref(null)
const toastRef = ref(null)
let myToast: any = null

onMounted(() => {
  const { $Tooltip, $Popover, $Toast } = useNuxtApp()
  new $Tooltip(tooltipRef.value!, {
    animation: false,
  })
  new $Popover(popoverRef.value!, {
    trigger: 'focus',
  })
  myToast = new $Toast(toastRef.value!, {
    delay: 3000,
  })
})

function showToast() {
  myToast.show()
}
</script>
