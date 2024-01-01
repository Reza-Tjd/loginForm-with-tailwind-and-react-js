import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      firstName: "",
      lastName: "",
      email: "",
      allValid: false,
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.firstNameHandler = this.firstNameHandler.bind(this);
    this.lastNameHandler = this.lastNameHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    this.setState({
      submitted: true,
    });
    if (
      this.state.firstName != "" &&
      this.state.lastName != "" &&
      this.state.email != ""
    ) {
      this.setState({
        allValid: true,
      });
      setTimeout(() => {
        this.setState({
          allValid: false,
        });
      }, 3000);
    }
  }

  firstNameHandler(event) {
    this.setState({
      firstName: event.nativeEvent.target.value,
    });
  }

  lastNameHandler(event) {
    this.setState({
      lastName: event.nativeEvent.target.value,
    });
  }

  emailHandler(event) {
    this.setState({
      email: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {/* the entire of the page */}
        <div className="flex justify-center items-center h-screen   ">
          {/* the whole menu */}
          <div className="w-72 bg-white py-12 shadow-2xl ">
            {this.state.allValid && (
              <div className="w-52 h-10 bg-blue-500 rounded-md text-white text-sm ml-10  flex items-center justify-center mb-4">
                {" "}
                Sucess! Thanks for registering
              </div>
            )}

            <div className=" child:space-y-4">
              <form onSubmit={this.submitHandler}>
                {/* firstname field */}
                <div className="flex-col text-zinc-700  ">
                  <div className="flex justify-center">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="outline-none bg-slate-100 rounded-md py-2 px-3"
                      onChange={this.firstNameHandler}
                      value={this.state.firstName}
                    />
                  </div>
                  {this.state.firstName === "" && this.state.submitted ? (
                    <p className="text-red-600 text-sm  pl-11 ">
                      Please insert a first name!
                    </p>
                  ) : (
                    <p className="text-red-600 text-sm  pl-11 hidden ">
                      Please insert a first name!
                    </p>
                  )}
                </div>
                {/* lastname field */}
                <div className="flex-col text-zinc-700  ">
                  <div className="flex justify-center">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="outline-none bg-slate-100 rounded-md py-2 px-3"
                      onChange={this.lastNameHandler}
                      value={this.state.lastName}
                    />
                  </div>
                  {this.state.lastName === "" && this.state.submitted ? (
                    <p className="text-red-600 text-sm  pl-11 ">
                      Please insert a last name!
                    </p>
                  ) : (
                    <p className="text-red-600 text-sm  pl-11 hidden ">
                      Please insert a last name!
                    </p>
                  )}
                </div>
                {/* email field */}
                <div className="flex-col text-zinc-700  ">
                  <div className="flex justify-center">
                    <input
                      type="email"
                      placeholder="Email"
                      className="outline-none bg-slate-100 rounded-md py-2 px-3"
                      value={this.state.email}
                      onChange={(event) => this.emailHandler(event)}
                    />
                  </div>
                  {this.state.email === "" && this.state.submitted ? (
                    <p className="text-red-600 text-sm  pl-11 ">
                      Please insert an email name!
                    </p>
                  ) : (
                    <p className="text-red-600 text-sm  pl-11 hidden ">
                      Please insert an email name!
                    </p>
                  )}
                </div>
                {/* btn */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-green-600 w-52 h-10 rounded-md text-white hover:bg-green-700 transition-colors"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
