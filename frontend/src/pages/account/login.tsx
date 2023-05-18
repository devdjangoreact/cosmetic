import { Login } from "@/components/auth";
import AuthComponent from "../../components/authComponent";
import {
  client,
  parseCookie,
  setAuthCookie,
  setIsLoginCookie,
} from "../../lib/network";
import { LoginMutation } from "../../lib/graphQueries";
import { errorHandler } from "../../lib/errorHandler";
import { customNotifier } from "../../components/customNotifier";
import Router, { useRouter } from "next/router";
import { isLogin, setUser, setTokenData } from "../../lib/dataVariables";
import { MyContext } from "../../components/customContext";
import { useContext, useState } from "react";

const login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { dispatch }: any = useContext(MyContext);

  const submit = async (e: any, data: any) => {
    e.preventDefault();
    setLoading(true);

    const result = await client
      .mutate({
        mutation: LoginMutation,
        variables: data,
      })
      .catch((e) =>
        customNotifier({ type: "error", content: errorHandler(e) })
      );

    console.log(result);
    console.log(data);
    if (result) {
      const { access, refresh, user } = result.data.loginUser;

      dispatch({ type: setUser, payload: user });
      dispatch({ type: setTokenData, payload: { access, refresh } });

      setAuthCookie({ access, refresh });
      const redirect = router.query["redirect"] as string;
      let url = "/";
      if (redirect) {
        url = redirect;
      }
      setIsLoginCookie(true);
      Router.push(url);
      // setTimeout(() => , 1000);
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      <Login onSubmit={submit} loading={loading} />
    </>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const isLoginState = parseCookie(ctx)[isLogin];
  if (isLoginState) {
    const { query } = ctx;
    const redirect = query["redirect"];
    let url = "/";
    if (redirect) {
      url = redirect;
    }
    return {
      redirect: {
        destination: url,
      },
    };
  }
  return {
    props: {},
  };
};

export default login;
