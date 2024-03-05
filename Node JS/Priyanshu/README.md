Node Js:-------
	Node.js is an open source server environment
	Node.js is free
	Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
	Node.js uses JavaScript on the server 

Download Node.js software 

create folder for node js:-
	open folder in cmd  
	then init node js  (npm init -y) npm=node package manager
	open vs code (code . )

Note:- 
server site language use krka programing krna k liya HTTP response ki need hogi uska liya express framework use kranga 

HTTP =HyperText Transfer Protocol. it is used for exchanging files on the World Wide Web.

install express framework:-
	npm i express
	open vs code (code .)


auto update web pack:-
	install nodemon (npm i -g nodemon --save)
	browser run (nodemon server)


Add this command into the package.json file into the scripts with a key,



import html file (ejs) in node js:-
	1.install ejs=Embedded JavaScript (npm i ejs)
	2.app.set('view engine','ejs')   // import search engine
	3. create folder (views)
	4.create file home.ejs for html& js code (.ejs)
add ejs file in server:-
	5.app.get('/home',(req,res)=>{
    		res.render('home')    //ejs (html) file render
	   })




import image in node js:-
	1. first create a folder (public)
	2. then create another folder for store image inside public folder
	3. for use image we referance the public folder in index.js
	4. app.use(express.static(__dirname+"/public"));
	5. then import image in html (<img src="image/image.png" alt="image"/>)


import css in node js:-
	1. create css folder in public folder 
	2. create .css file  
	3. link css file in html 
	4. <link rel="stylesheet" href="/css/style.css"/>  


—-------------------------------------------------------------------------------
Node js modules:-
	Node.js has a set of modules which you can use without any further installation.
File system modules (fs) :-
	For read .text file :-


utf-8 === If the encoding option is specified then this function returns a string. Otherwise it returns a buffer.

buffer:-
The buffers module provides a binary data.