// 이메일 체크 정규식
export const validateEmail = (userEmail: string) => {
  const emailRegex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  return emailRegex.test(userEmail);
};

// 비밀번호 체크 정규식
export function validatePassword(value: string) {
  const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/; //  8 ~ 10자 영문, 숫자 조합

  return regExp.test(value); // 형식에 맞는 경우 true 리턴
}
