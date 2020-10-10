const subject = require('.');

describe('Bot protection', () => {

    it('should detect bot from logged actions', () => {
        const actions = [
            "left",
            "right",
            "fire",
            "jump",
            "fire",
            "back",
            "forward",
            "forward",
            "jump",
            "fire",
            "back",
            "left",
            "left",
            "right"
        ];
        expect(subject.botProtection(actions)).toEqual(true);
    });

    it('should not give false positives', () => {
        const actions = [
            "left",
            "right",
            "fire",
            "jump",
            "fire",
            "back",
            "forward",
            "forward",
            "fire",
            "back",
            "left",
            "left",
            "right"
        ];
        expect(subject.botProtection(actions)).toEqual(false);
    });

});