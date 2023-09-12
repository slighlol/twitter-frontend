import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '@containers/App';
import Login from '@containers/Login';
import Register from '@containers/Register';
import { CxtProvider } from '@utils/context';
import Tweets from '@containers/Tweets';
import Comment from '@containers/Comment';

import './index.scss';
import CreateTweet from '@containers/CreateTweet';

// import { startVconsole } from './utils';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CxtProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="tweets" element={<Tweets />} />
            <Route path="comment/:id" element={<Comment />} />
            <Route path="createTweet" element={<CreateTweet />} />
            <Route path="tip" element={<Comment />} />
            <Route path="message" element={<Comment />} />
            <Route path="search" element={<Comment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CxtProvider>
  </React.StrictMode>,
);

// start vconsole
// startVconsole();