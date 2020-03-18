function CSVtoArray(text) {
  if(!text) return null;

  const cells = text.split(/,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/gm);
  if(!cells || !cells.length) return null;
  
  return cells.map(cell => {
    if(cell.startsWith('"') && cell.endsWith('"')) cell = cell.slice(1, -1);
    return cell;
  })
}

module.exports = CSVtoArray;
