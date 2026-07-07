import HttpError from "../helpers/HttpError.js";

const validateBody = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      next(HttpError(400, error.message));
      return;
    }

    next();
  };
};

export default validateBody;