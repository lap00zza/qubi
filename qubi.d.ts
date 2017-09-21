declare const Qubi: {
    /**
     * The total achievable score which is the number of adapters.
     */
    totalScore: Number;

    /**
     * Test the given password against the adapters and return a
     * score depending on how many checks are passed.
     * @param {String} password
     * @returns {Number} score - A number between 0 and {@link totalScore}
     */
    checkPassword(password: String): Number;
};

export default Qubi;
