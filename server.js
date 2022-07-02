const http = require ('http');
let counter = 0

const server = http.createServer((request, response) => {
    counter++
   switch (request.url) {
       case '/':
           response.write ('HomePage' + counter)
           break;
       case '/student':
           response.write ('Hello students!')
           break;
       case '/teacher':
           response.write ('Hello teachers!')
           break;
       case '/courses':
           response.write ('This is courses!')
           break;
       default:
           response.write ('400 not found')

   }
    response.end()
})
server.listen(3000)