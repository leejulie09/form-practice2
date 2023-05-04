export const min = (num: number) => (v: string) => {
  if (v.length < num) {
    return `${num}자 이상으로 작성해주세요.`;
  } else {
    return "";
  }
};

export const max = (num: number) => (v: string) => {
  if (v.length > num) {
    return `${num}자 이하로 작성해주세요.`;
  } else {
    return "";
  }
};

// [min(2), max(4)]
// "2", ""
// setError("2")
// setError()

//try0. else값에 '올바른 입력랎입니다'를 넣어주고 싶었지만, min, max가
//minNum < v.length < maxNum으로 만들지 못해서 안됨
