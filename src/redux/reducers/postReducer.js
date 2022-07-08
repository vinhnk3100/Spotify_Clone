import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
} from '../constants/index';

// Khởi tạo init state
const initState = {
  request: false,
  success: false,
  message: null,
  data: [],
};
