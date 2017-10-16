module.exports = function() {
    return (req, res, next) => {
        if (req.originalUrl === '/hostname' && req.method === 'GET') {
            return res.send({
                hostname: process.env.HOSTNAME || ''
            });
        }
        next();
    };
};
