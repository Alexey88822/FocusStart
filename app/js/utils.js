export const HostName = 'http://localhost:3000';

export const durationOfAnimation = () =>{
  const timeout = 2000;
  return new Promise((resolve,reject) => {
      if (timeout>=0){
          setTimeout(()=>{
              resolve('successful');
          },timeout);
      } else {
          reject('error in proceedPaymentInfo');
      }
  });
};

export const XHRwithPromise = function(url, method, data) {
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    request.responseType = 'json';
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.status));
        }
      }
    };
    request.onerror = function() {
      reject(Error("Network Error"));
    };
    request.open(method, url, true);
    request.send(data);
  });
}