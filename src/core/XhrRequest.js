const applicationJsonContentTypeValue = 'application/json';


/**
 * 
 /**
 * Make request to a server
 * @param {string} url Endpoint to send request
 * @param {string} method Verb used to make request
 * @param {any} data Data to send
 * @returns Promise that resolve with the response, or reject
 */
function SendRequest(url, method = 'GET', data = null) {
    var contentTypeHeader = null;
    var requestPromise = new Promise(function (resolve, reject) {
        try {
            var xhr = new XMLHttpRequest();
            xhr.addEventListener('readystatechange', function (stateChengeEvent) {
                if (xhr.readyState === 2) {
                    contentTypeHeader = xhr.getResponseHeader('content-type');
                }
                if (xhr.readyState === 4) {
                    if (contentTypeHeader.indexOf(applicationJsonContentTypeValue) > -1) {
                        var responseObject = JSON.parse(xhr.responseText);
                        resolve(responseObject);
                    }
                    else {
                        resolve(xhr.responseText);
                    }

                }
            });
            xhr.open(method, url);
            xhr.send(data);
        } catch (error) {
            reject(error);
        }

    });

    return requestPromise;
}



var XhrRequest = {
    sendRequest: SendRequest
};


export default XhrRequest;