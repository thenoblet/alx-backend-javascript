const express = require('express');

const router = express.Router();

const StudentsController = require('../controllers/StudentsController');
const AppController = require('../controllers/AppController');

/**
 * Route to handle the homepage request.
 * @route GET /
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
router.get('/', async (req, res) => AppController.getHomepage(req, res));

/**
 * Route to get all students.
 * @route GET /students
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
router.get('/students', async (req, res) => StudentsController.getAllStudents(req, res));

/**
 * Route to get all students by major.
 * @route GET /students/:major
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
router.get('/students/:major',
  async (req, res) => StudentsController.getAllStudentsByMajor(req, res));

module.exports = router;