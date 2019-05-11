import React from 'react';
import HeartImg from '../../images/heart.png';
import BubbleImg from '../../images/bubble.png';
import BookmarkImg from '../../images/bookmark.png';

const MainIcons = () => (
  <div class="card-main-icons">
    <ul class="flex-container card-main-icons-left">
      <li class="icon-heart">
        <img
          alt="heart-icon"
          src={HeartImg}
          width="30px"
          height="30px"/>
      </li>
      <li class="icon-comment">
        <img 
          alt="bubble-icon"
          src={BubbleImg}
          width="30px"
          height="30px"/>
      </li>
    </ul>
    <ul class="flex-container card-main-icons-right">
      <li class="icon-bookmark icons-right">
        <img 
          alt="bookmark-icon"
          src={BookmarkImg}
          width="30px"
          height="30px"/>
      </li>
    </ul>
  </div>
);

export default MainIcons;