export enum AppRoute {
  Login = "/",
  Chat = "/chat",
}

export const validationRules = {
  username: {
    maxLength: 30,
    allowSpaces: false,
    required: true,
    minLength: 3,
  },
  room: {
    maxLength: 30,
    allowSpaces: false,
    required: true,
    minLength: 1,
  },
};

export const errorMessages = {
  required: "Поле обязательно для заполнения",
  allowSpaces: "Поле не должно содержать пробелы",
  maxLength: (max: number) => `Длина не должна превышать ${max} символов`,
  minLength: (min: number) => `Длина должна быть больше ${min} символов`,
}