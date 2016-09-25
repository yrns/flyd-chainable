const flyd = require('flyd'),
      filter = require('flyd/module/filter')

function _filter(f) { return filter(f, this) }

function wrap(f) {
    return function(...a) {
        const s = f(...a)
        s.filter = _filter
        // ... etc.
        return s
    }
}

flyd.stream = wrap(flyd.stream)
flyd.combine = wrap(flyd.combine)

module.exports = flyd
