export const LocalStorage = {
  setAuthToken: (token: string) => localStorage.setItem('token', token),
  getAuthToken: () => localStorage.getItem('token') as string,
  deleteAuthToken: () => localStorage.removeItem('token'),
}
