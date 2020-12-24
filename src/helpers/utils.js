export function getFormBody(params) {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); //'user name' => 'user%20name'
    let encodedValue = encodeURIComponent(params[property]); //mounika 123 => mounika%20123

    formBody.push(encodedKey + '=' + encodedValue);

    return formBody.join('&'); //username=mounika&password=123
  }
}

export function getFormData(params) {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); //'user name' => 'user%20name'
    let encodedValue = encodeURIComponent(params[property]); //mounika 123 => mounika%20123

    formBody.push(encodedKey + '=' + encodedValue);

    return formBody.join('&'); //username=mounika&password=123
  }
}
