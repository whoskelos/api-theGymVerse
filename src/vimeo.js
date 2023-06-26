import { Vimeo } from "vimeo";
let CLIENT_ID='be8f53db68981e3a9859b9412930d979c25d8479';
let CLIENT_SECRET='VteojPQDL7yZHS1kRxTSpoSemArHdEBgOAaIm+b/+0CU+8CkkxbrI6FgcUE63Oy5OFlEjoqSSbyFUYAaDydNsLblSNDc4tcdWnaWPicNlAeQVtRqq74ylzOPiwd/Re62';
let ACCESS_TOKEN='184ec89b981ba5977292ffd834a398b1';
let client = new Vimeo(CLIENT_ID,CLIENT_SECRET,ACCESS_TOKEN);

client.request({
    method: 'GET',
    path: '/me/videos'
}, function (error, body, status_code, headers) {
    if (error) {
        console.log(error);
    }

    console.log(body);
});