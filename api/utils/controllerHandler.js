function sendResponse(res, resData){

    res.send("Error in module");
    //return res.end();
}

exports.controllerHandler = (controller) => async (req, res) => {
    try {
      await controller(req, res);
    } catch (error) {
        console.log(error);
        sendResponse(res,error.message)
    }
  };
