const isLogin = false;
export const withLogin = (Component: any) => {
  if (isLogin)
    return (props: any) => {
      return <Component {...props}></Component>;
    };
  return ()=>{return 'Need Login'};
};
