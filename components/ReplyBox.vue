<template>
  <div class="reply-box">
    <textarea v-model="replyText" placeholder="Reply..."></textarea>
    <div class="actions">
      <button @click="submitReply">Reply</button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const replyText = ref('');
const emit = defineEmits(['submit']);

const submitReply = () => {
  if (!replyText.value.trim()) return;
  emit('submit', replyText.value);
  replyText.value = '';
};
</script>

<style scoped>
.reply-box {
  background: #444;
  padding: 10px;
  border-radius: 8px;
  margin-top: 10px;
}
textarea {
  width: 100%;
  height: 50px;
  padding: 5px;
  border-radius: 5px;
  background: #555;
  color: white;
}
.actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
}
button {
  background: #00cc88;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}
</style>
