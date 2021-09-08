
const ServerRequestData = (function () {
    var serverUrl = 'https://localhost:5001';
    return {
        serverUrl: serverUrl,
        apiUrl: `${serverUrl}/api`
    }
})();

export default ServerRequestData;