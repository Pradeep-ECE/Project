const Department=require('../../models').department;
const Role=require('../../models').role;
const settingsController=require('./settings.Controller');
const db=require('../../models/index').db;
console.log("db    ",db);





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
  describe('settings Controller', () => {
  
    beforeEach(async () => {
  
      jest.restoreAllMocks();
    })


    test("createDepartment", async () => {
      req = mockRequest();
      res = mockResponse();
      req.params = [{ id:1,name:"Node",isDeleted:false },{ id:2,name:"react",isDeleted:false }]
        
      Department.bulkCreate = jest.fn()
        .mockRejectedValueOnce(new Error("Error"))
        .mockResolvedValue(Promise.resolve({}));
      await settingsController.createDepartment(req, res);
      expect(res.statusCode).toBe(422);
      await settingsController.createDepartment(req, res);
      expect(res.statusCode).toBe(200);
  
   });
  
  test("createDepartment", async () => {
      req = mockRequest();
      res = mockResponse();
      // req.body = [{ id:1,name:"Node",isDeleted:false },{ id:2,name:"react",isDeleted:false }]
        
      Department.bulkCreate = jest.fn()
        .mockRejectedValueOnce(new Error("Error"))
        .mockResolvedValue(Promise.resolve({}));
      await settingsController.createDepartment(req, res);
      expect(res.statusCode).toBe(422);
      await settingsController.createDepartment(req, res);
      expect(res.statusCode).toBe(200);
  
   });
  test("createRole", async () => {
    req = mockRequest();
    res = mockResponse();
    req.body = [{ id:1,name:"Manager",isDeleted:false }]
      
    Role.create = jest.fn()
      .mockRejectedValueOnce(new Error("Error"))
      .mockResolvedValue(Promise.resolve({}));
    await settingsController.createRole(req, res);
    expect(res.statusCode).toBe(422);
    await settingsController.createRole(req, res);
    expect(res.statusCode).toBe(200);

 });
 test("deleteRole", async () => {
  req = mockRequest();
  res = mockResponse();
  req.body = { id:3}
    
  Role.update = jest.fn()
    .mockRejectedValueOnce(new Error("Error"))
    .mockResolvedValue(Promise.resolve({}));
  await settingsController.deleteRole(req, res);
  expect(res.statusCode).toBe(422);
  await settingsController.deleteRole(req, res);
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

    // test("createEmployee", async () => {
    //   req = mockRequest();
    //   res = mockResponse();
    //       req.body = { id:14,firstName:"pradeep",lastName:"M",email:"pradeep@mailinator.com",password:"12345", roleId: 1,isDeleted: false,companyId: 1 ,departmentId: 1 },
        
    //     Employee.create = jest.fn()
    //     .mockRejectedValueOnce(new Error("Error"))
    //     .mockResolvedValue(Promise.resolve({}));
    //   await employeeController.createEmployee(req, res);
    //   expect(res.statusCode).toBe(422);
    //   await employeeController.createEmployee(req, res);
    //   expect(res.statusCode).toBe(200);
  
    // });
    // test("createEmp", async () => {
    //   req = mockRequest();
    //   res = mockResponse();
    //       req.body = { id:14,firstName:"pradeep",lastName:"M",email:"pradeep@mailinator.com",password:"12345", roleId: 1,isDeleted: false,companyId: 1 ,departmentId: 1 },
        
    //     Employee.create = jest.fn()
    //     .mockRejectedValueOnce(new Error("Error"))
    //     .mockResolvedValue(Promise.resolve({}));
    //   await employeeController.createEmp(req, res);
    //   expect(res.statusCode).toBe(422);
    //   await employeeController.createEmp(req, res);
    //   expect(res.statusCode).toBe(200);
  
    // });




    
});