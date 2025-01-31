import { defineStore } from 'pinia';

export const useCommentStore = defineStore('commentStore', {
  state: () => ({
    comments: []
  }),
  actions: {
    async fetchComments() {
      try {
        const res = await fetch('/api/comments');
        this.comments = await res.json();
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    },
    addComment(comment) {
      this.comments.push(comment);
    }
  }
});