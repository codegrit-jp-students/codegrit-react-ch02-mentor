import React from 'react';
import avatar from '../images/avatar.png'

const Header = () => (
  <section class="card-header">
    <div class="poster-avatar">
      <img alt="アバター" src={avatar} />
    </div>
    <div class="poster-name">
      testuser
    </div>
  </section>
);

export default Header;