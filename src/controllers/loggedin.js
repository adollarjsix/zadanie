export default function loggedInController() {
    this.sessionId = sessionStorage.getItem('sessionId');
}
