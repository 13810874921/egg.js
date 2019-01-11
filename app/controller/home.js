'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = '<a href="/testList">hi, egg</a>';
  }
}

module.exports = HomeController;
