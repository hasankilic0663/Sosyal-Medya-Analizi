const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(express.json());

app.post('/generate-response', async(req, res) => {
    const { input } = req.body;

    try {

        //const apiKey = ;
        //const apiUrl = ;


        const response = await axios.post(
            apiUrl, {
                prompt: input,
                max_tokens: 100,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
            }
        );


        res.json({ response: response.data.choices[0].text.trim() });
    } catch (error) {

        console.error('Error generating GPT-3 response:', error);

        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});