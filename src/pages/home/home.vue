<template>
  <n-icon :component="AlipayCircleOutlined" size="40" :depth="1" />
  <n-icon :component="AlipayCircleOutlined" size="40" :depth="2" />
  <n-icon :component="AlipayCircleOutlined" size="40" :depth="3" />
  <n-icon :component="AlipayCircleOutlined" size="40" :depth="4" />
  <n-icon :component="AlipayCircleOutlined" size="40" :depth="5" />
</template>

<script lang="ts">
import { AlipayCircleOutlined } from '@vicons/antd'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      AlipayCircleOutlined,
    }
  },
})
</script>
