<template>
  <div class="comment-system">
    <h2>💬 评论区</h2>
    <CommentBox />
    <CommentList />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useCommentStore } from '@/store/comments';
import CommentBox from './CommentBox.vue';
import CommentList from './CommentList.vue';

const commentStore = useCommentStore();

onMounted(() => {
  commentStore.fetchComments();
});
</script>

<style scoped>
.comment-system {
  max-width: 600px;
  margin: 0 auto;
  background: #222;
  padding: 20px;
  border-radius: 10px;
}
h2 {
  text-align: center;
  color: white;
}
</style>
