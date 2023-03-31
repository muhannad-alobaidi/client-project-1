const resolveAcfRepeater = (obj, key) => {
  if (obj[key] === undefined) {
    return [];
  }
  const numItems = parseInt(obj[key], 10);
  const ret = [];
  for (let n=0; n<numItems; n++) {
    const idx = `${key}_${n}_`;
    const cobj = {};
    Object.keys(obj).map(ckey => {
      if (ckey.indexOf(idx) === 0) {
        cobj[ckey.substring(idx.length)] = obj[ckey];
      }
    });
    ret.push(cobj);
  }
  return ret;
};

export {
  resolveAcfRepeater,
};
