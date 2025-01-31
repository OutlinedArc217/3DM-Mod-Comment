let comments = [];

export default defineEventHandler(async (event) => {
  if (event.method === 'GET') {
    return comments;
  }
  if (event.method === 'POST') {
    const body = await readBody(event);
    body.id = Date.now();
    body.replies = [];
    comments.unshift(body);
    return body;
  }
});
