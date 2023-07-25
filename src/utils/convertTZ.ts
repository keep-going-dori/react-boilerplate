export const convertTZ = () => {
  const timeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const lang:string = timeZone === 'Asia/Seoul' ? 'ko' : 'en';
  return [timeZone, lang];
};
