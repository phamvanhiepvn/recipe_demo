export const getDocumentScreen = () => {
  const { clientWidth } = document.body;
  if (clientWidth >= 1201) {
    return 'landscapewidedesktop3x';
  } else if (clientWidth >= 1025 && clientWidth <= 1200) {
    return 'landscapewidedesktop2x';
  } else if (clientWidth >= 769 && clientWidth <= 1024) {
    return 'landscape32medium3x';
  } else if (clientWidth >= 481 && clientWidth <= 768) {
    return 'landscape32small3x';
  } else if (clientWidth >= 320 && clientWidth <= 480) {
    return 'landscapemobile3x';
  }
  return 'landscapewidedesktop3x';
};
