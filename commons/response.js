"use strict";
const customerror = (message) => ({
  success: false,
  message,
});

const customSuccess = (response) => {
  return {
    data: response.data,
    status: response.status ?? 200,
    message: response.message ?? "Successful",
    success: true,
  };
};

module.exports = { customerror, customSuccess };

const error = customSuccess({ data: customerror("Hello ") });

console.log({ error });
