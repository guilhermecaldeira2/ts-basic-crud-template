import Express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './router';

function createApp() {
  const express = Express();
  function registerMiddleWares() {
    express.use(cors());
    express.use(Express.json());
    express.use(morgan('dev'));
    express.use(router);
  }

  function init() {
    registerMiddleWares();
    return express;
  }

  return {
    init,
  };
}

export default createApp;
