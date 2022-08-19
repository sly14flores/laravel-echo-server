# local-echo-server
## Laravel Socket.io server

### Install
```shell
cd local-echo-server
...\local-echo-server>npm install
```

### Run server
```shell
...\local-echo-server>npm start
L A R A V E L  E C H O  S E R V E R

version 1.6.2

⚠ Starting server in DEV mode...

✔  Running at localhost on port 6001
✔  Channels are ready.
✔  Listening for http events...
✔  Listening for redis events...

Server ready!
```
### Implementation
#### Use laravel-echo with socket.io-client  

1. Install laravel-echo
```shell
npm install laravel-echo
```
2. Install socket.io-client
```shell
npm install socket.io-client
```
3. Sample implementation
```shell
import Echo from "laravel-echo"

window.io = require('socket.io-client');

window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: 'localhost:6001'
});
```
### Implement with 2.3_03
As a captain, I want to receive a notification from the system when my verification is successful. The admin will be notified of my respective email address.  
  
```shell
window.Echo.private('captain.notifications.'+user_id)
    .listen('captain.email.verified', e => {
		
		// e = payload
		// push e in bell array
		
	})
```
### Implement with 2.3_04
As an Admin, I want to receive a notification from the system of the captain’s respective email address when a captain email verification is successful.  
  
```shell
window.Echo.private('admin.notifications.'+user_id)
    .listen('captain.email.verified', e => {
		
		// e = payload
		// push e in bell array
		
	})
```
