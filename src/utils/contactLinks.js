export const AGENDA_PRO_URL =
  "https://link.agendapro.com/ar/dermaraizestetica/4f640556?fbclid=PAVERTVgQnaZ1leHRuA2FlbQIxMABzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAadhT0Q_xmeF7cuYIcILwcK_Hh9ymS5RGLsceY3VH6xqc0OseCfsF2EKNycuZw_aem_gqokXnHZamyrFdlWW1Tffg";

export function getWhatsappUrl(message) {
  const text = encodeURIComponent(message);

  return `https://wa.me/5491173565160?text=${text}`;
}
