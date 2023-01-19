import fetch from 'node-fetch';

it ("Should get a login token", async () => {//async allows us to read from the database by moving on a nd coming back

    const loginResponse = await fetch('https://dev.stedi.me/login',{ // await fetch allows it to move on while getting the data
        
        method:'POST', //method: POST says to give information to the server 
        headers:{
            'content-Type' : 'application/text'
        },
        
        body:JSON.stringify({ //Makes the following into JSON text to be read by the server
        
            "userName":"willy1995@gmail.com",
            "password": "Willy@pass12"
        })


    })
expect(loginResponse.status).toBe(200); //200 means authorized 
})
