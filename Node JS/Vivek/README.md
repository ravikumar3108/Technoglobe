1.create node file cmd ====  npm init -y (npm init)
2.Create a index.js file
3.Install express js 
4.to run our node file === node index.js 
5.require express.
6.Server create by the (listen) method with an object . Object is created by the express 
7.To create a Api's === get
8.Send reasponse in our localhost server

MVC = MOdel View Controller 

EJS : Embedded Javascipt for our backend template



import html file (ejs) in node js:-
	1.install ejs=Embedded JavaScript (npm i ejs)
	2.app.set('view engine','ejs')   // import search engine
	3. create folder (views)
	4.create file home.ejs for html& js code (.ejs)
add ejs file in server:-
	5.app.get('/home',(req,res)=>{
    		res.render('home')    //ejs (html) file render
	   })
—---------------------------------------------------------------------

import image in node js:-
	1. first create a folder (public)
	2. then create another folder for store image inside public folder
	3. for use image we referance the public folder in server.js
	4. app.use(express.static(__dirname+"/public"));
	5. then import image in html (<img src="image/image.png" alt="image"/>)


import css in node js:-
	1. create css folder in public folder 
	2. create .css file  
	3. link css file in html 
	4. <link rel="stylesheet" href="/css/style.css"/>  
