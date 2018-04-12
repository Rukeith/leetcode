/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;
  const ransomNoteArr = ransomNote.split('');
  const oldMagazineLength = magazine.length;
  ransomNoteArr.forEach((item,index) => magazine = magazine.replace(item,''));
  return (oldMagazineLength === magazine.length + ransomNoteArr.length)
};