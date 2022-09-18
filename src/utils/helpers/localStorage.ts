export const LocalStorage = {
  setAuthToken: (token: string) => localStorage.setItem('todos-token', token),
  getAuthToken: () => localStorage.getItem('todos-token') as string,
  deleteAuthToken: () => localStorage.removeItem('todos-token'),
}
