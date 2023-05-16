const Department=require('../../models').department;
const Role=require('../../models').role;
const settingsService=require('./settingsService');


const mockRequest = () => {
    const req = {}
    req.body = jest.fn().mockReturnValue(req)
    req.params = jest.fn().mockReturnValue(req)
    return req
  }
  const mockResponse = () => {
    const res = {}
    res.send = jest.fn().mockReturnValue(res)
    res.status = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
    return res
  };
  
  
  
  jest.setTimeout(30000)
  
    beforeEach(async () => {
  
      jest.restoreAllMocks();
    });
    test("getDepartment", async () => {
        let req = mockRequest();
        let  res = mockResponse();
        req.body = {id: 1}; 
        Department.findOne = jest.fn().mockRejectedValueOnce(new Error("Error"))
            .mockResolvedValue(Promise.resolve({}));
        try{
            await settingsService.getDepartment(req,res);
        }catch(error){
            console.log('error',error);
        }
        await settingsService.getDepartment(req,res);

  });
    
  test("getRole", async () => {
    let req = mockRequest();
    let  res = mockResponse();
    req.body = {id: 1}; 
    Role.findOne = jest.fn().mockRejectedValueOnce(new Error("Error"))
        .mockResolvedValue(Promise.resolve({}));
    try{
        await settingsService.getRole(req,res);
    }catch(error){
        console.log('error',error);
    }
    await settingsService.getRole(req,res);

});