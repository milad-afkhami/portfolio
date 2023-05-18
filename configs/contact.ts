export enum ContactType {
  Email = "email",
  Linkedin = "linkedin",
  Skype = "skype",
  Telegram = "telegram",
  Whatsapp = "whatsapp",
}

const contactOptions = [
  { type: ContactType.Email, value: "dev.miladafkhami@gmail.com" },
  {
    type: ContactType.Linkedin,
    label: "milad-afkhami-pour",
    value: "https://www.linkedin.com/in/milad-afkhami-pour/",
  },
  {
    type: ContactType.Skype,
    label: "join.skype.com/invite/pRe4UIXrDeTj",
    value: "https://join.skype.com/invite/pRe4UIXrDeTj",
  },
  {
    type: ContactType.Telegram,
    label: "@mili_u",
    value: "https://telegram.me/mili_u",
  },
  {
    type: ContactType.Whatsapp,
    label: "+98 939 284 0749",
    value: "+989392840749",
    private: true,
  },
];

export default contactOptions;
