import "./styles.css";
import useForm from "./useForm";

export default function App() {
  const { handleChange, handleSubmit, values, errors } = useForm({
    initialValue: { account: "", password: "", rememberMe: false },
    validation: (valueObj) => {
      const errors = {};
      if (!valueObj.account) errors.account = "請輸入帳號";
      else if (!valueObj.password) errors.password = "請輸入密碼";
      return errors;
    },
    onSubmit: () => console.table(values)
  });

  return (
    <div className="wrapper">
      <div>
        <input
          name="account"
          onChange={handleChange}
          value={values.account}
        ></input>
        {errors.account && <div className="errorDiv">{errors.account}</div>}
      </div>
      <div>
        <input
          name="password"
          onChange={handleChange}
          value={values.password}
        ></input>
        {errors.password && <div className="errorDiv">{errors.password}</div>}
      </div>
      <div className="footer">
        <label>
          <input
            type="checkbox"
            name="rememberMe"
            onChange={handleChange}
            value={values.rememberMe}
          ></input>
          Remember Me
        </label>
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
}
