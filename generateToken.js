const express = require('express'); // Import express
const btoa = require('btoa'); // Import the btoa module

function _0x52fd(_0x4eb123, _0x550166) {
    var _0x235c85 = _0x235c();
    return (_0x52fd = function (_0x52fd4f, _0x22efee) {
        _0x52fd4f = _0x52fd4f - 0x92;
        var _0x2f4db3 = _0x235c85[_0x52fd4f];
        return _0x2f4db3;
    }),
    _0x52fd(_0x4eb123, _0x550166);
}

function _0x235c() {
    var _0x3b7031 = [
        '2fplaJc', 'toString', '31468SQLQtT', '938007DWMtLp',
        '2292kJKZCQ', '161418MskDnK', '1744720NjjJhd', 'replace',
        '542172NqZnNT', 'repeat', '400ZBhSIP', '33IDjrov',
        '3005mNdWmp', '4905DWzlqF', '9pLIJwM',
    ];
    _0x235c = function () {
        return _0x3b7031;
    };
    return _0x235c();
}

var _0x1d60e8 = _0x52fd;

(function (_0x55e234, _0x3f48ca) {
    var _0x200cee = _0x52fd,
        _0x562a98 = _0x55e234();
    while (!![]) {
        try {
            var _0x520a71 =
                (-parseInt(_0x200cee(0x9c)) / 0x1) * (-parseInt(_0x200cee(0x97)) / 0x2) +
                -parseInt(_0x200cee(0x96)) / 0x3 * (parseInt(_0x200cee(0x99)) / 0x4) +
                -parseInt(_0x200cee(0x94)) / 0x5 * (-parseInt(_0x200cee(0x9b)) / 0x6) +
                parseInt(_0x200cee(0x9a)) / 0x7 +
                -parseInt(_0x200cee(0x92)) / 0x8 * (parseInt(_0x200cee(0x95)) / 0x9) +
                -parseInt(_0x200cee(0x9d)) / 0xa +
                parseInt(_0x200cee(0x93)) / 0xb * (-parseInt(_0x200cee(0x9f)) / 0xc);
            if (_0x520a71 === _0x3f48ca) break;
            else _0x562a98['push'](_0x562a98['shift']());
        } catch (_0x569fb0) {
            _0x562a98['push'](_0x562a98['shift']());
        }
    }
})(_0x235c, 0x28127);

function generateToken(id) {
    return btoa(
        btoa(
            btoa(
                (id[_0x1d60e8(0x98)](0x10) + '-' + id[_0x1d60e8(0x98)](0x10))[
                    _0x1d60e8(0xa0)
                ](0x4)
            ) +
            '_z' +
            btoa(id[_0x1d60e8(0x98)](0x10)) +
            ('_0' + id[_0x1d60e8(0x98)](0x10))[_0x1d60e8(0xa0)](0x3)
        )
    )
        [_0x1d60e8(0x9e)]('=', '')
        ['replace']('=', '');
}

const app = express();
const port = 3000;

// API endpoint to generate token
app.get('/generate-token/:id', (req, res) => {
    const id = parseInt(req.params.id, 10); // Get ID from URL params
    if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid ID. Please provide a numeric ID.' });
    }
    const token = generateToken(id); // Generate the token
    res.json({ token }); // Respond with JSON
});

app.listen(port, () => {
    console.log(`API is running on http://localhost:${port}`);
});
