// This is our server side
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));

// so the server will understand incoming data as json
app.use(express.json());
const saved_outfits= [];
const outfit=[];
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'public/index.html'));
})

// app.get('/saveNotes', (request, response) => {
//     ...
// })
 
app.get('/get_outfits', function(request, response) {
    response.json(saved_outfits);
});

 app.post('/save', (request, response) => {
    const data = request.body;
    saved_outfits.push(data);
    const res= response.json(saved_outfits);

       })
       

app.post('/chosen', (request, response) => {

     const data = request.body;
     outfit[0]=data;
     const res= response.json(outfit);
    })


app.get('/array', (request, response) => {
    const pro= outfit[0].index;
    const respo= response.json(saved_outfits[parseInt(pro)]);
    })

app.post('/delete', (request, response) => {
    const data = request.body;
    saved_outfits.splice(data.index,1);
    const res= response.json(saved_outfits);
       })

app.listen(3000, () => console.log('listening at 3000'));