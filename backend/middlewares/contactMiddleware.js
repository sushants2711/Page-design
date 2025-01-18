import joi from "joi";

export const contactMiddleware = async (req, res, next) => {
    const schema = joi.object({
        name: joi.string().required().min(2).max(20).trim(),
        email: joi.string().email().required().min(10).max(30).trim(),
        message: joi.string().required().min(10).max(256).trim(),
    });
    const { error } = schema.validate(req.body);
    if( error ) {
        return res
        .status(400)
        .json({ message: "Bad request", error})
    }
    next()
}