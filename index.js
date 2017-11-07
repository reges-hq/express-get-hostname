module.exports = function() {
    return (req, res, next) => {
        res.setHeader('x-hostname', process.env.HOSTNAME);
        next();
    };
};
