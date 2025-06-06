export const errorHandler = (err, req, res, next) => {
  console.error("Error: ", err);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";

  res.status(statusCode).json({
    status: "error",
    message,
    error: err.stack,
    data: null,
  });
};
