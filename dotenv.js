#!/usr/bin/env node
/**
 * @author David Spreekmeester <david@grrr.nl>
 */
const envfile = require('envfile')


var dotenv = module.exports = {

    /**
     * Loads .env and returns cleaned up variables
     * @param String path File path to .env file. Default: .env
     * @return Promise
     */
    load: function(path = '.env') {
        return new Promise(function(resolve, reject) {
            envfile.parseFile(path, function (err, obj) {
                if (err) reject(err)
                resolve(dotenv.clean(obj))
            })
        })

    },

    clean: function(dirty) {
        if (typeof dirty === 'string') {
            dirty = envfile.parseSync(dirty)
        }
        
        dirty = this.stripQuotesIterate(dirty)
        dirty = this.stripComments(dirty)

        return dirty 
    },

    stripComments: function(obj) {
        for (p in obj) {
            if (p[0] === '#') {
                delete obj[p]
            }
        }

        return obj
    },

    stripQuotesIterate: function(obj) {
        for (var p in obj) {
            obj[p] = dotenv.stripQuotes(obj[p])
        }

        return obj
    },

    stripQuotes: function(str) {
        var first   = str[0]
        var last    = str.charAt(str.length - 1)
        var sq      = "'"
        var dq      = '"'

        if (
            (first === sq && last === sq) ||
            (first === dq && last === dq)
        ) {
            return str.substr(1, str.length - 2);
        } 

        return str
    }
};
