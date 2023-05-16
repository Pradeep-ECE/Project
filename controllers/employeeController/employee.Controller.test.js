const Employee=require('../../models').employee;
const employeeController=require('./employee.Controller');
const consolidateService=require('../../services/consolidateService')





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
  
  
  // ReE = jest.fn(() => { ReE(res, {}, 422); }).mockReturnValue({ success: false, error: {} });
  jest.setTimeout(30000)
  describe('employee Controller', () => {
  
    beforeEach(async () => {
  
      jest.restoreAllMocks();
    })


    test("getEmployee", async () => {
      req = mockRequest();
      res = mockResponse();
      req.params = { id:1 },
        
        Employee.findOne = jest.fn()
        .mockRejectedValueOnce(new Error("Error"))
        .mockResolvedValue(Promise.resolve({dataValues:{roleId:1,departmentId:1}}));
      consolidateService.callOtherSchema=jest.fn()
      .mockRejectedValueOnce(new Error("Error"))
      .mockResolvedValue(Promise.resolve({}))
      .mockRejectedValueOnce(new Error("Error"))
      .mockResolvedValue(Promise.resolve({}));
      await employeeController.getEmployee(req, res);
      expect(res.statusCode).toBe(422);
      await employeeController.getEmployee(req, res);
      expect(res.statusCode).toBe(422);
      await employeeController.getEmployee(req, res);
      expect(res.statusCode).toBe(422);
      await employeeController.getEmployee(req, res);
      expect(res.statusCode).toBe(200);
  
   });
    // test("getEmployee", async () => {
    //   req = mockRequest();
    //   res = mockResponse();
    //   req.params = { id:1 },
        
    //     Employee.findOne = jest.fn()
    //     .mockResolvedValueOnce({})
    //   await employeeController.getEmployee(req,res);
    //   expect(res.statusCode).toBe(422);
  
    // });

    test("createEmployee", async () => {
      req = mockRequest();
      res = mockResponse();
          req.body = { id:14,firstName:"pradeep",lastName:"M",email:"pradeep@mailinator.com",password:"12345", roleId: 1,isDeleted: false,companyId: 1 ,departmentId: 1 },
        
        Employee.create = jest.fn()
        .mockRejectedValueOnce(new Error("Error"))
        .mockResolvedValue(Promise.resolve({}));
      await employeeController.createEmployee(req, res);
      expect(res.statusCode).toBe(422);
      await employeeController.createEmployee(req, res);
      expect(res.statusCode).toBe(200);
  
    });
    test("createEmp", async () => {
      req = mockRequest();
      res = mockResponse();
        req.body = { id:14,firstName:"pradeep",lastName:"M",email:"pradeep@mailinator.com",password:"12345", roleId: 1,isDeleted: false,companyId: 1 ,departmentId: 1 },
        Employee.create = jest.fn()
        .mockRejectedValueOnce(new Error("Error"))
        .mockResolvedValue(Promise.resolve({}));
      await employeeController.createEmp(req, res);
      expect(res.statusCode).toBe(422);
      await employeeController.createEmp(req, res);
      expect(res.statusCode).toBe(200);
  
    });




    
});