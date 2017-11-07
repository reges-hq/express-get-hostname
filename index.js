module.exports = function() {
    return (req, res, next) => {
        res.setHeader('X-Hostname', process.env.HOSTNAME);
        next();
    };
};
