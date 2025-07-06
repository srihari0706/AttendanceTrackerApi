import express from 'express';
import { createUser , checkUser } from '../controllers/LoginControllers.js';
import { getSearchView } from '../controllers/SearchViewControllers.js';

const authRoutes = express.Router(); //this will create a small interal router that routs to a aprticular function
// login routes
authRoutes.post('/create-user', createUser);
authRoutes.post('/login', checkUser);

//Search view routes
authRoutes.get('/get-search-view' , getSearchView) //get must use encodeURIComponent and json.stringify

export default authRoutes;
