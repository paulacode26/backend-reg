const express = require('express');

// module to handle get request on localhost:7000 and load the registration form
exports.form = (req, res) => {  
    res.sendFile('../frontend/index.html', { root: '.' });
};

// module to handle post request on localhost:7000 when user submits the registration form
// form data is captured and sent back as a response
exports.formprocess = (req, res) =>
{  

    const { id, fullname, address, status } = req.body;
    let fee;
   if (status === "Student") {
       fee = 10;
   } else if (status === "Staff") {
       fee = 50;
   } else if (status === "Volunteer") {
       fee = 0;
   } else {
       fee = "Unknown";
   }
   console.log(req.body);
   const responseHTML = `
        <html>
            <head>
                <link rel="stylesheet" href="style.css">
            </head>
            <body class="body">
                <div class="popup">
                    <h1 class="titleanswer">Registration Successful</h1>
                    <br><br>
                    <p>ID: ${id}</p>
                    <p>Full Name: ${fullname}</p>
                    <p>Address: ${address}</p>
                    <p>Status: ${status}</p>
                    <p>Registration Fee: $${fee}</p>
                </div>
            </body>
        </html>
    `;
    res.send(responseHTML);
};