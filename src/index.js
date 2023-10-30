import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CxtProvider } from '@utils/context';
import App from '@containers/App';
import Login from '@containers/Login';
import Register from '@containers/Register';
import Tweets from '@containers/Tweets';
import Comment from '@containers/Comment';
import CreateTweet from '@containers/CreateTweet';
import Tweet from '@containers/Tweet';
import My from '@containers/My';
import Follower from '@containers/Follower';
import EditUser from '@containers/EditUser';

import './index.scss';

// import { startVconsole } from './utils';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  <React.StrictMode> prevent warning
  <CxtProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Tweets />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="comment/:id" element={<Comment />} />
          <Route path="createTweet" element={<CreateTweet />} />
          <Route path="my" element={<My />} />
          <Route path="follow" element={<Follower />} />
          <Route path="tweet/:id" element={<Tweet />} />
          <Route path="editUser" element={<EditUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </CxtProvider>,
//  </React.StrictMode>,
);

// start vconsole
// startVconsole();

// unused
// <Route path="tip" element={<Comment />} />
// <Route path="message" element={<Comment />} />
// <Route path="search" element={<Comment />} />