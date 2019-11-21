import http from "../services/httpService";

export default {

  // Saves a user to the database
  saveUser: function(userData) {
    return http.post("/api//users", userData);
  }
};