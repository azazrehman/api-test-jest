/**
 * Author       : Azaz ur rehman <azaz.bscs3173@iiu.edu.pk>
 * Date         : 07/12/2020
 * Description  : Sample file in which simngle API test is implemented
 */
const axios = require("axios");
const { expect } = require("chai");
//{describe} defines collection of test cases
describe("Sample API Test", () => {
  /**
   * baseURL= https://reqres.in/
   */
  let baseURL = "https://reqres.in/";

  it("Test-01 - Get Single User API", async () => {
    //Simple Get Request
    try {
      let response = await axios.get(`${baseURL}api/users/2`); //cancatinate API with baseURl
      expect(response.status).to.be.equal(200); //Mean Response must be equal to 200
    } catch (error) {
      expect.fail(error);
    }
  });
  it("Test-02 - Create User API", async () => {
    //Simple Delete Request
    try {
      const parameters = {
        name: "Azaz",
        job: "Autoamtion Engineer",
      };
      let response = await axios.post(
        `https://reqres.in/api/users`,
        parameters
      );
      expect(response.status).to.be.equal(201); //Mean Response must be equal to 201
    } catch (error) {
      expect.fail(error);
    }
  });
});
