import React from "react";
import styles from "../styles/CreateEmployee.module.css";
import Button from '../components/Button';

const CreateEmployee = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <div className={styles.employeeForm}>
      <h1>Employee Form</h1>
      <div>
        <form onSubmit={handleSubmit}>
          {/* NAME SECTION */}
          <h2>Employee Name</h2>
          <div className={styles.nameContainer}>
            <div className={styles.nameBlock}>
              <input type="text" id="fname" name="fname" /> <br />
              <label for="fname">First Name </label>
            </div>
            <div className={styles.nameBlock}>
              <input type="text" id="mname" name="mname" /> <br />
              <label for="mname">Middle Name </label>
            </div>
            <div className={styles.nameBlock}>
              <input type="text" id="lname" name="lname" /> <br />
              <label for="lname">Last Name </label>
            </div>
            <div className={styles.nameBlock}>
              <input type="text" id="contact" name="contact" /> <br />
              <label for="contact">Contact Number </label>
            </div>
            <div className={styles.nameBlock}>
              <input type="text" id="email" name="email" /> <br />
              <label for="email">Email </label>
            </div>
          </div>
          <h2>Address</h2>
            {/* ADDRESS SECTION */}
          <div className={styles.addressContainer}>
            <div className={styles.addressBlock}>
              <span><label for="addressLine">Address Line</label></span>
              <input type="text" id="addressLine" name="addressLine" /> <br />
            </div>
            <div className={styles.addressBlock}>
              <span><label for="city">City</label></span>
              <input type="text" id="city" name="city" /> <br />
            </div>
            <div className={styles.addressBlock}>
              <span><label for="province">Province</label></span>
              <input type="text" id="province" name="province" /> <br />
            </div>
            <div className={styles.addressBlock}>
              <span><label for="country">Country</label></span>
              <input type="text" id="country" name="country" /> <br />
            </div>
            <div className={styles.addressBlock}>
              <span> <label for="zipcode">Zip Code</label></span>
              <input type="text" id="zipcode" name="zipcode" /> <br />
            </div>
            <h2>Employee Designation</h2>
            {/* DESIGNATION SECTION */}
            <div classname={styles.designationContainer}>
              <div className={styles.designationBlock}>
                <span><label for='department'>Department</label></span>
                <select id="department" name="department">
                  <option value="IT">IT</option>
                  <option value="HR">HR</option>
                  <option value="Finance">Finance</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </div>
              <div className={styles.designationBlock}>
                <span><label for='designation'>Designation</label></span>
                <select id="designation" name="designation">
                  <option value="IT">IT</option>
                  <option value="HR">HR</option>
                  <option value="Finance">Finance</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </div>
              <div className={styles.designationBlock}>
                <span><label for='employeetype'>Employee Type</label></span>
                <select id="employeetype" name="employeetype">
                  <option value="fulltime">Full-Time</option>
                  <option value="parttime">Part-Time</option>
                  <option value="temporary">Temporary</option>
                  <option value="seasonal">Seasonal</option>
                  <option value="intern">Intern</option>
                </select>
              </div>
              <div className={styles.designationBlock}>
                <span><label for='status'>Status</label></span>
                <select id="status" name="status">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="retired">Retired</option>
                  <option value="awol">AWOL</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.button}>
            <div>
            <Button>Cancel</Button>
            </div>
            <div>
            <Button>Create Employee</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployee;
