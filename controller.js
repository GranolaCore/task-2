const getUserInfoHandler = (req, res) => {
    res.json({
        ipadress: req.ip,
        language: req.headers['accept-language'] || 'Unknown Language',
        software: req.headers['user-agent'] || 'Unknown Software',
    });
};

module.exports = { getUserInfoHandler };
