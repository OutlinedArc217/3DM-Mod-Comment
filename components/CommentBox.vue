<template>
  <div class="comment-box-container">
    <!-- 输入区域 -->
    <div 
      class="input-wrapper"
      :class="{ 'active-container': isFocused }"
      @click.stop="focusInput"
    >
      <textarea
        ref="textInput"
        v-model="commentText"
        class="comment-box"
        placeholder="Add a comment..."
        rows="3"
        @focus="isFocused = true"
        @blur="isFocused = false"
      ></textarea>

      <!-- 内嵌二次元妹子 -->
      <img src="/anime-girl.png" class="anime-girl" />

      <!-- 底部动画横线 -->
      <div class="underline-container">
        <div 
          class="underline" 
          :style="underlineStyle"
        ></div>
      </div>
    </div>

    <!-- 操作按钮组 -->
    <div class="action-buttons">
      <!-- 第一行按钮 -->
      <div class="quick-reply-group">
        <button
          v-for="(btn, index) in firstRowActions"
          :key="index"
          class="quick-action-btn"
          @click="handleQuickAction(btn)"
        >
          {{ btn }}
          <div class="mask-effect"></div>
        </button>
      </div>
      
      <!-- 第二行按钮 -->
      <div class="quick-reply-group">
        <button
          v-for="(btn, index) in secondRowActions"
          :key="index"
          class="quick-action-btn"
          @click="handleQuickAction(btn)"
        >
          {{ btn }}
          <div class="mask-effect"></div>
        </button>
      </div>

      <!-- 提交按钮 -->
      <button 
        class="submit-btn"
        @click="submitComment"
        @mousedown="startRipple"
      >
        <img src="/submit-icon.svg" class="submit-icon" />
        SUBMIT
        <div class="ripple-effect" :class="{ active: isRippling }"></div>
        <div class="mask-effect"></div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const commentText = ref("");
const isFocused = ref(false);
const isRippling = ref(false);
const underlineStyle = ref({});
const textInput = ref(null);

// 颜文字映射
const emoticonMap = {
  '感谢': '(´• ω •`)ﾉ',
  '支持': '٩(◕‿◕｡)۶',
  '疑问': '(•ิ_•ิ)?',
  '卖萌': '(≧◡≦) ♡',
  '关心': '(っ´ω`)ﾉ(╥ω╥)'
};

// 按钮分组
const quickActions = ["Quick Reply", "感谢", "支持", "疑问", "卖萌", "关心"];
const firstRowActions = computed(() => quickActions.slice(0, 3));
const secondRowActions = computed(() => quickActions.slice(3));

// 处理快速回复
const handleQuickAction = (btnText) => {
  if (btnText === 'Quick Reply') return;
  const emoticon = emoticonMap[btnText];
  if (emoticon) commentText.value += emoticon + ' ';
};

const handleLineClick = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const clickX = e.clientX - rect.left; // 获取点击位置相对于输入框的偏移量

  // 初始状态：蓝线从点击位置起点，宽度为 0
  underlineStyle.value = {
    left: `${clickX}px`,
    width: '0',
    transition: 'none'
  };

  setTimeout(() => {
    underlineStyle.value = {
      left: '0', // 让蓝线从输入框的最左端扩展
      width: '200%', // 让蓝线足够长，覆盖整个输入框并扩展到外部
      transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1), left 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    };
  }, 10);
};

// 提交逻辑
const submitComment = () => {
  if (commentText.value.trim()) {
    console.log("提交评论:", commentText.value);
    commentText.value = "";
  }
};

// 涟漪动画
const startRipple = () => {
  isRippling.value = true;
  setTimeout(() => isRippling.value = false, 600);
};

// 输入框聚焦
const focusInput = (event) => {
  textInput.value.focus();
  handleLineClick(event); // 触发蓝线动画
};
</script>

<style scoped>
/* 容器样式 */
.comment-box-container {
  max-width: 600px;
  margin: 0 auto;
  width: 95%;
  padding: 20px;
  background: #222;
  border-radius: 8px;
  user-select: none;
}

.input-wrapper {
  position: relative;
  margin-bottom: 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  padding-right: 140px;
  transition: background 0.3s;
  border: 1px solid transparent;
}

.input-wrapper.active-container {
  border-color: rgba(255, 255, 255, 0.1);
}

/* 输入框样式 */
.comment-box {
  width: 100%;
  min-height: 100px;
  padding: 12px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  resize: vertical;
  outline: none;
}

/* 二次元妹子 */
.anime-girl {
  position: absolute;
  bottom: 0px;
  right: 20px;
  width: 120px;
  height: auto;
  mix-blend-mode: screen;
  opacity: 0.9;
  pointer-events: none;
  transition: opacity 0.3s;
}

.anime-girl:hover {
  opacity: 1;
}

/* 蓝线动画 */
.underline-container {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 2px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.3);
}

.underline {
  position: absolute;
  height: 100%;
  background: #00BCD4;
  width: 0;
  transform-origin: center;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 按钮样式 */
.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.quick-reply-group {
  display: flex;
  gap: 10px;
}

.quick-action-btn {
  position: relative;
  padding: 8px 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  background: transparent;
  color: #fff;
  transition: all 0.2s;
}

/* 提交按钮 */
.submit-btn {
  margin-left: auto;
  padding: 10px 24px;
  border: 1px solid #00BCD4;
  border-radius: 8px;
  background: transparent;
  color: #00BCD4;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
</style>