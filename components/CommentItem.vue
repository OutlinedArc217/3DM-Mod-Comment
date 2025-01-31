<template>
  <div class="comment-item">
    <div class="comment-header">
      <img :src="comment.avatar" class="avatar" />
      <div class="comment-info">
        <span class="username">{{ comment.username }}</span>
        <span class="timestamp">{{ formatDate(comment.date) }}</span>
      </div>
    </div>
    <p class="comment-text">{{ comment.text }}</p>
    
    <!-- 操作按钮 -->
    <div class="comment-actions">
      <button class="action-btn">
        👍 {{ comment.likes || 0 }}
        <div class="mask-effect"></div>
      </button>
      <button class="action-btn">
        👎 {{ comment.dislikes || 0 }}
        <div class="mask-effect"></div>
      </button>
      <!-- 修改后的 ADD COMMENT 按钮 -->
      <button class="reply-btn" @mousedown="startRipple">
        <img src="/submit-icon.svg" class="submit-icon" />
        ADD COMMENT
        <div class="ripple-effect" :class="{ active: isRippling }"></div>
        <div class="mask-effect"></div>
      </button>
    </div>

    <!-- 子评论 -->
    <div v-if="comment.replies && comment.replies.length" class="reply-list">
      <CommentItem
        v-for="reply in comment.replies"
        :key="reply.id"
        :comment="reply"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

defineProps(["comment"]);

const isRippling = ref(false);

const formatDate = (date) => {
  return new Date(date).toLocaleString();
};

// 按钮点击时触发涟漪动画
const startRipple = () => {
  isRippling.value = true;
  setTimeout(() => isRippling.value = false, 600);
};
</script>

<style scoped>
/* 评论外框 */
.comment-item {
  background: #222;
  padding: 12px;
  border-radius: 6px;
  margin-top: 10px;
}

.comment-header {
  display: flex;
  align-items: center;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.comment-info {
  margin-left: 10px;
  color: #aaa;
}

.username {
  font-weight: bold;
  color: #fff;
}

.timestamp {
  font-size: 12px;
}

.comment-text {
  margin: 8px 0;
  color: #ccc;
}

/* 操作按钮组 */
.comment-actions {
  display: flex;
  gap: 10px;
}

/* 赞/踩按钮 */
.action-btn {
  position: relative;
  padding: 6px 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: transparent;
  color: #fff;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.2s;
}

.action-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* ADD COMMENT 按钮 */
.reply-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 24px;
  border: 1px solid #00BCD4;
  border-radius: 8px;
  background: transparent;
  color: #00BCD4;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

/* 按钮悬停 */
.reply-btn:hover {
  background: rgba(0, 188, 212, 0.1);
}

/* 添加的 SVG 图标 */
.submit-icon {
  width: 16px;
  height: 16px;
  filter: brightness(0) saturate(100%) invert(58%) sepia(99%) saturate(7498%) hue-rotate(169deg) brightness(101%) contrast(101%);
}

/* 按钮点击的波纹动画 */
.reply-btn:active .mask-effect {
  opacity: 0.4;
}

/* 遮罩效果 */
.mask-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 10%, transparent 70%);
  opacity: 0;
  transform: scale(0);
  animation: ripple-mask 0.6s;
  pointer-events: none;
  border-radius: inherit;
}

@keyframes ripple-mask {
  0% { opacity: 0.4; transform: scale(0); }
  100% { opacity: 0; transform: scale(2); }
}

/* 点击时的涟漪效果 */
.ripple-effect.active {
  animation: ripple 0.6s;
}

@keyframes ripple {
  from { transform: scale(0); opacity: 0.4; }
  to { transform: scale(2); opacity: 0; }
}

/* 子评论列表 */
.reply-list {
  margin-top: 10px;
  padding-left: 20px;
  border-left: 2px solid rgba(255, 255, 255, 0.1);
}
</style>