import "../styles/Main.css";

// JSX 주의 사항
// 1. 중괄호 내부에는 JS 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다.

const Main = () => {
  return (
    <main>
      <img
        className="hero static-image image-layer"
        src="https://occ-0-2218-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcFFyokRhRiZEDA22d9-JrIaihJnVPkAsZmij7HogWpe-dlhnX9q0DOw9FS430PRZQPQwYXd-F7cMxQFfyflrYgAWHvbfL1rbKmb.webp?r=dd6"
        alt=""
      />
      <h1>메인</h1>
    </main>
  );
  // return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
};

export default Main;
