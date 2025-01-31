import { _ as _export_sfc, v as vueExports, s as serverRenderer_cjs_prodExports } from "../server.mjs";
import { defineStore } from "pinia";
import { publicAssetsURL } from "#internal/nuxt/paths";
import "node:http";
import "node:https";
import "node:zlib";
import "node:stream";
import "node:buffer";
import "node:util";
import "node:url";
import "node:net";
import "node:fs";
import "node:path";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "radix3";
const useCommentStore = defineStore("commentStore", {
  state: () => ({
    comments: []
  }),
  actions: {
    async fetchComments() {
      try {
        const res = await fetch("/api/comments");
        this.comments = await res.json();
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    },
    addComment(comment) {
      this.comments.push(comment);
    }
  }
});
const _imports_0 = publicAssetsURL("/anime-girl.png");
const _imports_1 = publicAssetsURL("/submit-icon.svg");
const _sfc_main$4 = {
  __name: "CommentBox",
  __ssrInlineRender: true,
  setup(__props) {
    const commentText = vueExports.ref("");
    const isFocused = vueExports.ref(false);
    const isRippling = vueExports.ref(false);
    const quickActions = ["Quick Reply", "感谢", "支持", "疑问", "卖萌", "关心"];
    const firstRowActions = vueExports.computed(() => quickActions.slice(0, 3));
    const secondRowActions = vueExports.computed(() => quickActions.slice(3));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "comment-box-container" }, _attrs))} data-v-1ee4c0ea><div class="${serverRenderer_cjs_prodExports.ssrRenderClass([{ "active-container": isFocused.value }, "input-wrapper"])}" data-v-1ee4c0ea><textarea class="comment-box" placeholder="Add a comment..." rows="3" data-v-1ee4c0ea>${serverRenderer_cjs_prodExports.ssrInterpolate(commentText.value)}</textarea><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_0)} class="anime-girl" data-v-1ee4c0ea><div class="underline-container" data-v-1ee4c0ea><div class="${serverRenderer_cjs_prodExports.ssrRenderClass([{ "active-underline": isFocused.value }, "underline"])}" data-v-1ee4c0ea></div></div></div><div class="action-buttons" data-v-1ee4c0ea><div class="quick-reply-group" data-v-1ee4c0ea><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(firstRowActions.value, (btn, index) => {
        _push(`<button class="quick-action-btn" data-v-1ee4c0ea>${serverRenderer_cjs_prodExports.ssrInterpolate(btn)} <div class="mask-effect" data-v-1ee4c0ea></div></button>`);
      });
      _push(`<!--]--></div><div class="quick-reply-group" data-v-1ee4c0ea><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(secondRowActions.value, (btn, index) => {
        _push(`<button class="quick-action-btn" data-v-1ee4c0ea>${serverRenderer_cjs_prodExports.ssrInterpolate(btn)} <div class="mask-effect" data-v-1ee4c0ea></div></button>`);
      });
      _push(`<!--]--></div><button class="submit-btn" data-v-1ee4c0ea><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_1)} class="submit-icon" data-v-1ee4c0ea> SUBMIT <div class="${serverRenderer_cjs_prodExports.ssrRenderClass([{ active: isRippling.value }, "ripple-effect"])}" data-v-1ee4c0ea></div><div class="mask-effect" data-v-1ee4c0ea></div></button></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CommentBox.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const CommentBox = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-1ee4c0ea"]]);
const _sfc_main$3 = {
  __name: "CommentItem",
  __ssrInlineRender: true,
  props: ["comment"],
  setup(__props) {
    const formatDate = (date) => {
      return new Date(date).toLocaleString();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "comment-item" }, _attrs))} data-v-f3086bb6><div class="comment-header" data-v-f3086bb6><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", __props.comment.avatar)} class="avatar" data-v-f3086bb6><div class="comment-info" data-v-f3086bb6><span class="username" data-v-f3086bb6>${serverRenderer_cjs_prodExports.ssrInterpolate(__props.comment.username)}</span><span class="timestamp" data-v-f3086bb6>${serverRenderer_cjs_prodExports.ssrInterpolate(formatDate(__props.comment.date))}</span></div></div><p class="comment-text" data-v-f3086bb6>${serverRenderer_cjs_prodExports.ssrInterpolate(__props.comment.text)}</p><div class="comment-actions" data-v-f3086bb6><button class="action-btn" data-v-f3086bb6>👍 0</button><button class="action-btn" data-v-f3086bb6>👎 0</button><button class="reply-btn" data-v-f3086bb6>ADD COMMENT</button></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CommentItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CommentItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f3086bb6"]]);
const _sfc_main$2 = {
  __name: "CommentList",
  __ssrInlineRender: true,
  setup(__props) {
    const commentStore = useCommentStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "comment-list" }, _attrs))} data-v-20a02c70><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(commentStore).comments, (comment) => {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(CommentItem, {
          key: comment.id,
          comment
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CommentList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CommentList = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-20a02c70"]]);
const _sfc_main$1 = {
  __name: "CommentSystem",
  __ssrInlineRender: true,
  setup(__props) {
    useCommentStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "comment-system" }, _attrs))} data-v-956bda5b><h2 data-v-956bda5b>💬 评论区</h2>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(CommentBox, null, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(CommentList, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CommentSystem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CommentSystem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-956bda5b"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(CommentSystem, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CeBVM1hJ.js.map
