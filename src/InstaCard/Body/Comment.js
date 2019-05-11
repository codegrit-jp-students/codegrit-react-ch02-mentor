import React from 'react';

const Comment = ({ username, comment }) => (
  <li class="poster-comment">
    <a href class="commenter-name">
      {username}
    </a>
    <span class="commenter-comment">
      {comment}
    </span>
  </li>
);

export default Comment;
