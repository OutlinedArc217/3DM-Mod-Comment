<template>
  <div class="comment-list">
    <CommentItem
      v-for="comment in commentStore.comments"
      :key="comment.id"
      :comment="comment"
    />
  </div>
</template>

<script setup>
import { useCommentStore } from '@/store/comments';
import CommentItem from './CommentItem.vue';

const commentStore = useCommentStore();
</script>

<style scoped>
.comment-list {
  margin-top: 20px;
}
</style>
