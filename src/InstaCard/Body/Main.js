import React from 'react';
import MainIcons from './MainIcons';
import Comments from './Comments';

const BodyMain = () => (
  <section class="card-main">
    <MainIcons />
    <div class="card-like-counts">100 likes</div>
    <Comments />
    <div class="post-date">1日前</div>
    <section class="comment-box">
      <div class="comment-area">コメントする</div>
    </section>
  </section>
);

export default BodyMain;