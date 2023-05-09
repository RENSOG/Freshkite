import express from "express";
import {
  addStudent,
  updateStudent,
  deleteStudent,
  getStudent,
  getStudents,
  Dashget
} from "../controllers/student.js";

import { verifyAdmin, verifyStudent } from "../utils/verifyToken.js";

const router = express.Router();

// ADD NEW STUDENT
router.post("/add", addStudent);

// UPDATE STUDENT
router.put("/:id", updateStudent);

// DELETE STUDENT
router.delete("/:id", deleteStudent);

// GET STUDENT
router.get("/:id", getStudent);

// GET ALL STUDENTS
router.get("/", getStudents);

// GET STUDENT COUNT
router.get('/count', Dashget);

export default router;
