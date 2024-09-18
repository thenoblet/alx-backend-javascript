#!/usr/bin/env node

/**
 * AppController class to handle application-level operations.
 */
class AppController {
	/**
	 * Handles the request for the homepage.
	 * @param {Object} req - The request object.
	 * @param {Object} res - The response object.
	 * @returns {Object} - The response object with a status of 200 and a welcome message.
	 */
	static getHomepage(req, res) {
	  return res.status(200).send('Hello Holberton School!');
	}
  }
  
  module.exports = AppController;