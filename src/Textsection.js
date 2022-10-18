const Textsection = () => {
  return (
    <div className="main-header">
      <div className="header">
        {" "}
        <p>
          This is not a real online service! You know you need something like
          this in your life to help you realize your deepest dreams.
          <p>Sign up now to get started.</p>
        </p>
        <p>You know you want to!</p>
      </div>

      <h3>Lets do this</h3>

      <div className="forms">
        <form action="#">
          <div className="form-wrapper">
            <label htmlFor="first_name">FIRST NAME</label>
            <input type="text" name="first_name" id="first_name" />
          </div>
          <div className="form-wrapper">
            <label htmlFor="last_name">LAST NAME</label>
            <input type="text" id="last_name" name="last_name" />
          </div>
          <div className="form-wrapper">
            <label htmlFor="user_email">EMAIL</label>
            <input type="email" name="user_email" id="user_email" />
          </div>
          <div className="form-wrapper">
            <label htmlFor="phone_number">PHONE NUMBER</label>
            <input type="number" name="phone_number" id="phone_number" />
          </div>
          <div className="form-wrapper">
            <label htmlFor="user_password">PASSWORD</label>
            <input type="password" name="user_password" id="user_password" />
          </div>
          <div className="form-wrapper">
            <label htmlFor="confirm-password">CONFIRM PASSWORD</label>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Textsection;
