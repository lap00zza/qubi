/**
 * MIT License
 * Copyright (C) 2017 Jewel Mahanta
 */

(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports === "object") {
        module.exports = factory();
    } else {
        root.Qubi = factory();
    }
}(this, function () {
    "use strict";

    // --- Utils ---
    var split = function (separator) {
        return function (what) {
            return what.split(separator);
        };
    };

    var letters = split("");

    var charRange = function (start, end) {
        return function (what) {
            return what.charCodeAt(0) >= start.charCodeAt(0) && what.charCodeAt(0) <= end.charCodeAt(0);
        };
    };

    // --- Adapters ---
    var length = function (length) {
        return function (password) {
            return password.length >= length;
        }
    };

    var hasNumber = function (password) {
        // O(n) can be optimized
        return letters(password).filter(charRange("0", "9")).length > 0;
    };

    var hasUppercase = function (password) {
        // O(n) can be optimized
        return letters(password).filter(charRange("A", "Z")).length > 0;
    };

    var hasLowercase = function (password) {
        // O(n) can be optimized
        return letters(password).filter(charRange("a", "z")).length > 0;
    };

    // Credit to OWASP for the special characters
    // https://www.owasp.org/index.php/Password_special_characters
    var hasSpecialChars = function (password) {
        return Boolean(password.match(/[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/gi));
    };

    // --- Qubi starts here ---
    var adapters = [
        length(8),
        length(14),
        hasNumber,
        hasUppercase,
        hasLowercase,
        hasSpecialChars
    ];

    return {
        totalScore: adapters.length,
        checkPassword: function (password) {
            var currentScore = 0;
            adapters.forEach(function (adapter) {
                adapter.call(null, password) ? currentScore++ : 0;
            });
            return currentScore;
        }
    };
}));
