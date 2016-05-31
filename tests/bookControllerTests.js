const should = require('should');
const sinon = require('sinon');

describe('Book controller Tests', function() {
  describe('Post', function() {
    it('should not allow an empty title on post', function() {
      let Book = function(book) {
        this.save = function() {};
      };
      const req = {
        body: { author: 'Jon' }
      };

      const res = {
        status: sinon.spy(),
        send: sinon.spy()
      };

      const bookController = require('../controllers/bookController')(Book);

      bookController.post(req, res);

      res.status
        .calledWith(400)
        .should.equal(true, 'Bad Status');

      res.send
        .calledWith('Title is required')
        .should.equal(true);
    });
  });
});
