export default {

  // User object will let us check authentication status
  user: {
    authenticated: false
  },

  savePublicName(name) {
    localStorage.setItem('cp-public-name', name);
    this.user.authenticated = true;
  },

  getPublicName() {
    return localStorage.getItem('cp-public-name');
  },

  // To log out, we just need to remove the token
  removePublicName() {
    localStorage.removeItem('cp-public-name');
    this.user.authenticated = false
  },

  checkAuth() {
    const jwt = localStorage.getItem('cp-public-name');
    this.user.authenticated = !!jwt;
  }
}
