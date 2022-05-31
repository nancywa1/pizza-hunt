const { Comment, Pizza } = require("../models");

const commentController = {
  addComment({ params, body }) {
    console.log(body);
    Comment.create(body).then(({ _id }) => {
      return Pizza.findOneAndUpdate(
        ({ _id: params.pizzaId }, { $push: { comments: _id } }, { new: true })
      );
      console.log(_id);
    });
  },
  removeComment() {},
};

module.exports = commentController;
