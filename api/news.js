
const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const query = req.query.q || 'indonesia';
    const apiKey = process.env.NEWS_API_KEY;
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&apiKey=${apiKey}`;

    try {
        const apiResponse = await fetch(url);
        const data = await apiResponse.json();
        
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch news' });
    }
};
