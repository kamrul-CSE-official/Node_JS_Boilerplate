const express = require("express");
const usersControlers = require("../../controllers/usersControllers");
const router = express.Router();

router
  .route("/random")
  /**
   * @api {get} /tools All tools
   * @apiDescription Get all the tools
   * @apiPermission admin
   *
   * @apiMeader {string} Authoriztion
   *
   * @apiParam {Number{1}}    [page=1]    List page
   * @apiParam {Number{1-100}}    [limit-10]  users per page
   *
   * @apiSuccess {Object{}} all the tools
   *
   * @apiError {Unauthorized 401} unauthorized only authenticated users can access the data
   * @ApiErrror {Forbidden 403}   Forbidden   only admins can access the data
   */
  .get(usersControlers.getrandom);

router
  .route("/all")
  /**
   * @api {get} /tools All tools
   * @apiDescription Get all the tools
   * @apiPermission admin
   *
   * @apiMeader {string} Authoriztion
   *
   * @apiParam {Number{1}}    [page=1]    List page
   * @apiParam {Number{1-100}}    [limit-10]  users per page
   *
   * @apiSuccess {Object{}} all the tools
   *
   * @apiError {Unauthorized 401} unauthorized only authenticated users can access the data
   * @ApiErrror {Forbidden 403}   Forbidden   only admins can access the data
   */
  .get(usersControlers.getAllUsers);

router
  .route("/save")
  /**
   * @api {get} /tools All tools
   * @apiDescription Get all the tools
   * @apiPermission admin
   *
   * @apiMeader {string} Authoriztion
   *
   * @apiParam {Number{1}}    [page=1]    List page
   * @apiParam {Number{1-100}}    [limit-10]  users per page
   *
   * @apiSuccess {Object{}} all the tools
   *
   * @apiError {Unauthorized 401} unauthorized only authenticated users can access the data
   * @ApiErrror {Forbidden 403}   Forbidden   only admins can access the data
   */
  .post(usersControlers.saveAUser);

module.exports = router;
